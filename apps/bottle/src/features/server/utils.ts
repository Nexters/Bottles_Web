import { getCookie } from 'cookies-next';
import { refreshAuth } from './auth';
import { STATUS } from './types';

export function createInit<Body extends object>(
  token?: string,
  body?: Body,
  cache: RequestCache = 'no-store'
): RequestInit {
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
    cache,
  };
}

async function fetchWrapperWithTokenHandler<Data>(input: string, init?: RequestInit): Promise<Data> {
  const response = await fetch(input, init);

  /**
   * NOTE: handles ONLY Unauthorized status
   */
  if (response.status === STATUS.UNAUTHORIZED) {
    await refreshAuth();

    return await fetchWrapperWithTokenHandler<Data>(input, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getCookie('accessToken') ?? ''}`,
      },
      body: init?.body,
      cache: init?.cache,
    });
  } else if (!response.ok) {
    // this error will be caught in useQuery hooks
    throw new Error('');
  }

  try {
    const data = await response.json();
    return data as Data;
  } catch (error) {
    return undefined as any;
  }
}

export function POST<Data>(input: string, init?: RequestInit): Promise<Data | void> {
  return fetchWrapperWithTokenHandler<Data>(input, { method: 'POST', ...init });
}

export function GET<Data>(input: string, init?: RequestInit) {
  return fetchWrapperWithTokenHandler<Data>(input, init);
}
