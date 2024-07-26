import { Button, Paragraph, colors } from '@bottlesteam/ui';
import { useState } from 'react';
import { BottomSheet, BottomSheetProps } from './bottom-sheet/BottomSheet';
import { itemStyle, listStyle, tabBarStyle } from './regionBottomSheetStyle.css';

interface Props extends Omit<BottomSheetProps, 'button' | 'body'> {
  items: string[];
  selected: string | undefined;
  onSelect(item?: string): void;
  type: 'city' | 'state';
}

export function RegionBottomSheet({ onSelect, selected, items, type, ...bottomSheetProps }: Props) {
  const [localSelected, setLocalSelected] = useState(selected);

  return (
    <BottomSheet
      {...bottomSheetProps}
      body={
        <>
          <TabBar type={type} />
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

function TabBar({ type }: { type: 'city' | 'state' }) {
  return (
    <div className={tabBarStyle}>
      <Button variant="outlined" size="sm" selected={type === 'city'}>
        전체 지역
      </Button>
      <Button variant="outlined" size="sm" selected={type === 'state'}>
        상세 지역
      </Button>
    </div>
  );
}
