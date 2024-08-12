import { refreshAuth, Tokens } from './auth';
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

async function fetchWrapperWithTokenHandler<Data>(uri: string, tokens: Tokens, init?: RequestInit): Promise<Data> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}${uri}`, init);

  /**
   * NOTE: handles ONLY Unauthorized status
   */
  if (response.status === STATUS.UNAUTHORIZED) {
    const newTokens = await refreshAuth(tokens);

    return await fetchWrapperWithTokenHandler<Data>(uri, newTokens, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${newTokens.accessToken}`,
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

export function POST<Data>(input: string, tokens: Tokens, init?: RequestInit): Promise<Data | void> {
  return fetchWrapperWithTokenHandler<Data>(input, tokens, { method: 'POST', ...init });
}

export function GET<Data>(input: string, tokens: Tokens, init?: RequestInit) {
  return fetchWrapperWithTokenHandler<Data>(input, tokens, init);
}
