import { LoginResponse } from '@/store/mutation/useLoginMutation';

type ToastMessage = string;

interface Login extends LoginResponse {}

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
