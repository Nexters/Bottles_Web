declare const Native: {
  onWebViewClose: () => void;
  onToastOpen: (json: string) => void;
  onTokenSend: (json: string) => void;
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
