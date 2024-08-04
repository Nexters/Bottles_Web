import { refreshAuth } from './auth';
import { STATUS } from './types';

export function createInit(token?: string, body?: object, cache: RequestCache = 'no-store'): RequestInit {
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
    cache,
  };
}

async function fetchWrapperWithTokenHandler(input: string, init?: RequestInit) {
  const response = await fetch(input, init);

  /**
   * NOTE: handles ONLY Unauthorized status
   */
  if (response.status === STATUS.UNAUTHORIZED) {
    await refreshAuth();

    const response = await fetch(input, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken') ?? ''}`,
      },
      body: init?.body,
      cache: init?.cache,
    });
    return response;
  }

  return response;
}

export function POST(input: string, init?: RequestInit) {
  return fetchWrapperWithTokenHandler(input, { method: 'POST', ...init });
}

export function GET(input: string, init?: RequestInit) {
  return fetchWrapperWithTokenHandler(input, init);
}
