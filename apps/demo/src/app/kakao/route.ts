import { redirect } from 'next/navigation';

const isDev = process.env.NEXT_PUBLIC_MODE === 'DEVELOPMENT';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  console.log('SERVER!', code);

  const response = await fetch('https://api.bottles.asia/api/v1/auth/kakao', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code, fcmDeviceToken: 'token' }),
  });
  console.log('SERVER!', response);

  redirect(isDev ? 'http://localhost:3000' : 'https://demo.bottles.asia/');
}
