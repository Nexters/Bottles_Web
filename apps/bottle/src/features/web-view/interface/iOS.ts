import { LoginResponse } from '@/store/mutation/useLoginMutation';

// 웹뷰 종료 호출
interface WebviewCloseMessage {
  type: 'onWebViewClose';
}

// 토스트 호출. message는 토스트에 띄울 메시지
interface ToastOpenMessage {
  type: 'onToastOpen';
  message: string;
}

// 로그아웃
interface Logout {
  type: 'logout';
}

// 회원탈퇴
interface DeleteUser {
  type: 'deleteUser';
}

// 프로필 제작 성공 콜백
interface CreateProfileComplete {
  type: 'onCreateProfileComplete';
}

// 문답 시작하기(보틀 수락) 콜백
interface BottleAccept {
  type: 'onBottleAccept';
}

// 로그인 성공 콜백
interface onLogin extends LoginResponse {
  type: 'onLogin';
}

// 회원가입 성공 콜백
interface onSignup {
  type: 'onSignup';
  accessToken: string;
  refreshToken: string;
}

export type IOSPayload =
  | WebviewCloseMessage
  | ToastOpenMessage
  | Logout
  | ToastOpenMessage
  | onSignup
  | onLogin
  | BottleAccept
  | CreateProfileComplete
  | DeleteUser;
