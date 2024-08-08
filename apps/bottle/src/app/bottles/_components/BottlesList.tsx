import { ReactNode } from 'react';
import { GetBottlesData, useBottlesQuery } from '../../../store/query/useBottlesQuery';
import { BottlesListItem } from './BottlesListItem';
import { Top } from './Top';
import { listStyle } from './bottlesListStyle.css';

interface Props {
  children: (data: GetBottlesData) => ReactNode;
  top: (data: GetBottlesData) => ReactNode;
}

function BottlesListRoot({ top, children }: Props) {
  const { data } = useBottlesQuery();

  return (
    <>
      {top(data)}
      <ul className={listStyle}>{children(data)}</ul>
    </>
  );
}

export const BottlesList = Object.assign(BottlesListRoot, {
  Top: Top,
  Item: BottlesListItem,
});
