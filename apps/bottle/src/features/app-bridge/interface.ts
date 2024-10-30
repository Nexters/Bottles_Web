import { LoginResponse } from '@/store/mutation/useLoginMutation';
import { Tokens } from '../server/auth';
import App from 'next/app';

export enum AppBridgeMessageType {
  TOAST_OPEN = 'onToastOpen',
  LOGIN = 'onLogin',
  SIGNUP = 'onSignup',
  WEB_VIEW_CLOSE = 'onWebViewClose',
  LOGOUT = 'logout',
  DELETE_USER = 'deleteUser',
  CREATE_PROFILE_COMPLETE = 'onCreateProfileComplete',
  BOTTLE_ACCEPT = 'onBottleAccept',
  OPEN_LINK = 'openLink',
  OPEN_WEB_VIEW = 'openWebView',
  INTRODUCTION_COMPLETE = 'onIntroductionComplete',
  PROFILE_IMAGE_EDIT_COMPLETE = 'onProfileImageEditComplete',
}
export type AppBridgeMessage =
  | ToastMessage
  | LoginMessage
  | SignupMessage
  | OpenLinkMessage
  | OpenWebViewMessage
  | {
      type:
        | AppBridgeMessageType.WEB_VIEW_CLOSE
        | AppBridgeMessageType.CREATE_PROFILE_COMPLETE
        | AppBridgeMessageType.DELETE_USER
        | AppBridgeMessageType.BOTTLE_ACCEPT
        | AppBridgeMessageType.LOGOUT
        | AppBridgeMessageType.INTRODUCTION_COMPLETE
        | AppBridgeMessageType.PROFILE_IMAGE_EDIT_COMPLETE;
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

export interface OpenLinkMessage {
  type: AppBridgeMessageType.OPEN_LINK;
  payload: {
    url: string;
  };
}

export interface OpenWebViewMessage {
  type: AppBridgeMessageType.OPEN_WEB_VIEW;
  payload: {
    href: string;
  };
}
