import { RefObject, useEffect, useState } from 'react';

export function useIsIntersecting(ref: RefObject<HTMLElement>) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (ref.current != null) {
      return;
    }
    const target = ref.current;

    const options = {
      root: null, // 뷰포트를 기준으로 함
      rootMargin: '0px',
      threshold: 0.1, // 10%가 보이면 콜백 실행
    };

    const intersectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('view');
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    }, options);

    if (target) {
      intersectionObserver.observe(target);
    }

    return () => {
      if (target) {
        intersectionObserver.unobserve(target);
      }
    };
  }, [ref]);

  return isVisible;
}
