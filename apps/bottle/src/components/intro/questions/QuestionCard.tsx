import { Card } from '@/components/common/card';
import { ReactNode } from 'react';

interface Props {
  number: number;
  children: ReactNode;
}

export function QuestionCard({ number, children }: Props) {
  return <Card>{children}</Card>;
}
