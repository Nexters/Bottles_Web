'use client';

import { ReactNode, createContext, useContext } from 'react';

interface Props {
  tokens?: {
    accessToken: string;
    refreshToken: string;
  };
  children: ReactNode;
}

const AuthContext = createContext<null | {
  tokens?: {
    accessToken: string;
    refreshToken: string;
  };
}>(null);

export function AuthProvider({ tokens, children }: Props) {
  return <AuthContext.Provider value={{ tokens }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const tokens = useContext(AuthContext);

  if (tokens == null) {
    throw new Error('Wrap Auth Context');
  }

  return tokens;
}
