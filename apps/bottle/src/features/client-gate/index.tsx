import { ReactNode, useEffect, useState } from 'react';

interface ClientGateProps {
  children: ReactNode;
}

export function ClientGate({ children }: ClientGateProps) {
  const [isServer, setIsServer] = useState(true);

  useEffect(() => {
    setIsServer(false);
  }, []);

  return <>{isServer ? null : children}</>;
}
