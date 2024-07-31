export async function sendSMS(phoneNumber: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/v1/auth/sms/send`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      phoneNumber,
    }),
  });
  if (!response.ok) {
    throw new Error();
  }
}
export async function checkAuthCode(phoneNumber: string, authCode: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/v1/auth/sms/send/check`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      authCode,
      phoneNumber,
    }),
  });
  if (!response.ok) {
    throw new Error();
  }
}
