type ToastMessage = string;

interface Login {
  accessToken: string;
  refreshToken: string;
}

interface Signup {
  accessToken: string;
  refreshToken: string;
}

export type AndroidPayload = ToastMessage | Login | Signup;

export type CallType =
  | 'onWebViewClose'
  | 'onToastOpen'
  | 'logout'
  | 'deleteUser'
  | 'onCreateProfileComplete'
  | 'onBottleAccept'
  | 'onLogin'
  | 'onSignup';
