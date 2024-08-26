import { ReactNode } from 'react';
import { useUserInfoQuery } from '../../../store/query/useUserInfoQuery';
import { titleStyle } from './topStyle.css';

interface Props {
  children: (name: string) => ReactNode;
}

export function Top({ children }: Props) {
  const {
    data: { name },
  } = useUserInfoQuery();

  return <div className={titleStyle}>{children(name)}</div>;
}
