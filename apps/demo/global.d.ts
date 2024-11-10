declare const Kakao: {
  isInitialized: () => boolean;
  init: (key: string) => void;
  Auth: {
    authorize: ({ redirectUri: string }) => void;
  };
};
