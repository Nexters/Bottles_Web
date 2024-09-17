import { Asset, Paragraph, colors, BottomSheet, BottomSheetProps, Chip } from '@bottlesteam/ui';
import { useEffect, useState } from 'react';
import { itemStyle, listStyle, tabBarStyle, tabItemsStyle } from './regionBottomSheetStyle.css';

interface Props extends Omit<BottomSheetProps, 'button' | 'body'> {
  items: string[];
  selected: string | undefined;
  onSelect(item?: string): void;
  type: 'city' | 'state';
}

export function RegionBottomSheet({ onSelect, selected, items, type, ...bottomSheetProps }: Props) {
  const [localSelected, setLocalSelected] = useState(selected);

  useEffect(() => {
    if (bottomSheetProps.isOpen) {
      window.document.body.style.overflow = 'hidden';
    } else {
      document.body.style.removeProperty('overflow');
    }
  }, [bottomSheetProps.isOpen]);

  return (
    <BottomSheet
      {...bottomSheetProps}
      body={
        <>
          <TabBar onClose={bottomSheetProps.onClose} type={type} />
          <ul className={listStyle}>
            {items.map(item => (
              <li
                key={item}
                className={itemStyle}
                onClick={() => {
                  setLocalSelected(item);
                }}
              >
                <Paragraph
                  typography="bo"
                  style={{ color: localSelected === item ? colors.purple500 : colors.neutral900, height: '32px' }}
                >
                  {item}
                </Paragraph>
              </li>
            ))}
          </ul>
        </>
      }
      button={
        <BottomSheet.Button
          disabled={localSelected === undefined}
          onClick={() => {
            onSelect(localSelected);
            bottomSheetProps.onClose();
          }}
        >
          완료
        </BottomSheet.Button>
      }
    />
  );
}

function TabBar({ type, onClose }: { type: 'city' | 'state'; onClose: BottomSheetProps['onClose'] }) {
  return (
    <div className={tabBarStyle}>
      <div className={tabItemsStyle}>
        <Chip active={type === 'city'}>전체 지역</Chip>
        <Asset type="icon-right" />
        <Chip active={type === 'state'}>상세 지역</Chip>
      </div>
      <div onClick={onClose}>
        <Asset type="icon-close" />
      </div>
    </div>
  );
}
