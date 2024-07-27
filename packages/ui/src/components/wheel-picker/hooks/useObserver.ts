import { useEffect, useMemo, useRef, createRef, useState, useCallback, FocusEvent } from 'react';
import { PickerData } from '../WheelPicker';
import useScrollAnimation, { PickerItemRef } from '../hooks/useScrollAnimation';

const setRefs = (data: PickerData[]) => {
  return () =>
    data.reduce((result, value) => {
      result[value.id] = createRef<HTMLLIElement>();
      return result;
    }, {} as PickerItemRef);
};

const calculatePercentageOfRootWithoutItem = (rootHeight: number, itemHeight: number) => {
  return 100 - (itemHeight / rootHeight) * 100;
};

const calculateMarginVertical = (rootHeight: number, itemHeight: number) => {
  return calculatePercentageOfRootWithoutItem(rootHeight, itemHeight) / 2;
};

const calculateRootMargin = (rootHeight: number, itemHeight: number) => {
  return `-${calculateMarginVertical(rootHeight, itemHeight)}% 0px`;
};

export const useObserver = (
  data: PickerData[],
  selectedID: string,
  itemHeight: number,
  onChange: (data: PickerData) => void
) => {
  const root = useRef<HTMLUListElement | null>(null);
  const refs = useMemo(setRefs(data), [data]);
  const observer = useRef<IntersectionObserver | null>(null);
  const [activeID, setActiveID] = useState(selectedID);
  const onScroll = useScrollAnimation(root, refs);

  const handleOnFocus = useCallback(
    (e: FocusEvent<HTMLLIElement>) => {
      const target = e.target;
      const id = target.getAttribute('data-itemid');
      const value = target.getAttribute('data-itemvalue');
      if (!id || !value) {
        throw new Error('Can not found id or value');
      }
      onScroll(data, id);
      setActiveID(id);
      onChange({ id, value });
    },
    [data, onChange, onScroll]
  );

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries: IntersectionObserverEntry[]): void => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        }

        const itemID = entry.target.getAttribute('data-itemid');
        const itemValue = entry.target.getAttribute('data-itemvalue');
        if (!itemID || !itemValue) {
          throw new Error('Can not found id or value');
        }

        onScroll(data, itemID, true);
        setActiveID(itemID);
        onChange({ id: itemID, value: itemValue });
      });
    };

    if (!observer.current && root.current) {
      observer.current = new IntersectionObserver(observerCallback, {
        root: root.current,
        rootMargin: calculateRootMargin(root.current.clientHeight, itemHeight),
        threshold: [0.3, 0.79],
      });
      data.map(item => {
        const elm = refs[item.id]?.current;
        if (elm && observer.current) {
          observer.current.observe(elm);
        }
      });

      const firstItem = refs[data[0]?.id as string]?.current;
      const item = refs[selectedID]?.current;
      if (firstItem && item) {
        root.current.scrollTo(0, item.offsetTop - firstItem.offsetTop);
      }
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
        observer.current = null;
      }
    };
  }, [data, refs, root, itemHeight]); // eslint-disable-line

  return {
    root,
    refs,
    activeID,
    onFocus: handleOnFocus,
  };
};
