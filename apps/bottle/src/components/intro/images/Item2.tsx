import { colors, Paragraph, radius, spacings } from '@bottlesteam/ui';
import { ReactNode } from 'react';

export function Item2() {
  return (
    <>
      <div
        style={{
          width: 226,
          height: 68,
          borderRadius: radius.xl,
          padding: spacings.md,
          backgroundColor: colors.neutral100,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: spacings.xxs,
          marginTop: spacings.sm,
        }}
      >
        <TabItem>소개</TabItem>
        <TabItem selected>가치관 문답</TabItem>
        <TabItem>매칭</TabItem>
      </div>
      <Paragraph style={{ marginTop: spacings.sm, textAlign: 'center' }} typography="ca">
        {'등록된 사진은 가치관 문답을 마친 후\n동의 하에 공개돼요'}
      </Paragraph>
    </>
  );
}

function TabItem({ selected = false, children }: { selected?: boolean; children: ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: `0 ${spacings.sm}`,
        position: 'relative',
        height: 42,
      }}
    >
      <Paragraph typography="st2" color={selected ? 'purple600' : 'neutral900'}>
        {children}
      </Paragraph>
      {selected && (
        <div
          style={{
            position: 'absolute',
            bottom: 2,
            left: 0,
            width: '100%',
            height: 2,
            backgroundColor: colors.purple600,
            borderRadius: 4,
          }}
        />
      )}
    </div>
  );
}
