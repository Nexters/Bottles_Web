declare const Native: {
  onWebViewClose: () => void;
  onToastOpen: (message: string) => void;
  logout: () => void;
  deleteUser: () => void;
  onCreateProfileComplete: () => void;
  onBottleAccept: () => void;
  onLogin: (json: string) => void;
  onSignup: (json: string) => void;
};

interface WebviewCloseMessage {
  type: 'onWebViewClose';
}
interface ToastOpenMessage {
  type: 'onToastOpen';
  message: string;
}
interface SendTokenMessage {
  type: 'onTokenSend';
  accessToken: string;
  refreshToken: string;
}

interface Window {
  webkit: {
    messageHandlers: {
      Native: {
        postMessage: (json: string) => void;
      };
    };
  };
}

declare const window: Window;
