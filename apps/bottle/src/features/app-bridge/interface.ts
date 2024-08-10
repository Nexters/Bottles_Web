import { LoginResponse } from '@/store/mutation/useLoginMutation';
import { Tokens } from '../server/auth';

export enum AppBridgeMessageType {
  TOAST_OPEN = 'onToastOpen',
  LOGIN = 'onLogin',
  SIGNUP = 'onSignup',
  WEB_VIEW_CLOSE = 'onWebViewClose',
  LOGOUT = 'logout',
  DELETE_USER = 'deleteUser',
  CREATE_PROFILE_COMPLETE = 'onCreateProfileComplete',
  BOTTLE_ACCEPT = 'onBottleAccept',
}
export type AppBridgeMessage =
  | ToastMessage
  | LoginMessage
  | SignupMessage
  | {
      type:
        | AppBridgeMessageType.WEB_VIEW_CLOSE
        | AppBridgeMessageType.CREATE_PROFILE_COMPLETE
        | AppBridgeMessageType.DELETE_USER
        | AppBridgeMessageType.BOTTLE_ACCEPT;
    };

export interface ToastMessage {
  type: AppBridgeMessageType.TOAST_OPEN;
  payload: {
    message: string;
  };
}
export interface LoginMessage {
  type: AppBridgeMessageType.LOGIN;
  payload: LoginResponse;
}

export interface SignupMessage {
  type: AppBridgeMessageType.SIGNUP;
  payload: Tokens;
}
