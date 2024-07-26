import { useEffect } from 'react';

interface ScrollSelectProps {
  selected: boolean;
}

export function ScrollSelect({ selected }: ScrollSelectProps) {
  useEffect(() => {
    const onScrollEnd = () => {
      // 중앙에 가장 가까운 아이템을 중앙에 위치시킨다.
    };
    window.addEventListener('scrollend', onScrollEnd);

    return () => window.removeEventListener('scrollend', onScrollEnd);
  }, []);

  return <ul></ul>;
}

interface ItemProps {
  selected: boolean;
}
// function ScrollItem({ selected }: ItemProps) {
//   return <li></li>;
// }

/**
 * 스크롤 시작할 때는 계산 x
 * 스크롤이 멈추면, 중앙에 가장 가까운 아이템을 중앙에 위치시킨다
 *
 */
