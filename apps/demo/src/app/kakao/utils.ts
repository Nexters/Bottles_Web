const isDev = process.env.NEXT_PUBLIC_MODE === 'DEVELOPMENT';

type Detail = 'grant_type' | 'client_id' | 'redirect_uri' | 'code';

export const getTokenFromKakako = async (code: string) => {
  const details: Record<Detail, string> = {
    grant_type: 'authorization_code',
    client_id: `${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}`,
    redirect_uri: `${isDev ? 'http://localhost:3000/kakao' : 'https://demo.bottles.asia/'}`,
    code,
  };
  const body = (Object.keys(details) as Detail[])
    .reduce((acc, key) => `${acc}${key}=${details[key]}&`, '')
    .slice(0, -1);

  const response = await fetch(`https://kauth.kakao.com/oauth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  });

  const data = await response.json();
  const accessToken = data.access_token;

  return accessToken;
};

interface LoginResponse {
  accessToken: string;
  hasCompleteIntroduction: boolean;
  hasCompleteUserProfile: boolean;
  isSignUp: boolean;
  refreshToken: string;
}

export const login = async (code: string): Promise<LoginResponse> => {
  const loginResponse = await fetch('https://api.bottles.asia/api/v1/auth/kakao', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code }),
  });
  const loginData = await loginResponse.json();

  return loginData;
};
