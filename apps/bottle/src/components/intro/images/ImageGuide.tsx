import { Asset, colors, Paragraph, spacings } from '@bottlesteam/ui';
import Image from 'next/image';
import Guide1 from './guide1.webp';
import Guide2 from './guide2.webp';

export function ImageGuide() {
  return (
    <>
      <div style={{ marginTop: '16.5px', display: 'flex', width: '100%', justifyContent: 'center', gap: spacings.xs }}>
        <div style={{ position: 'relative' }}>
          <Image src={Guide1} alt="guide1" width={80} height={80} />
          <div
            style={{
              width: '24px',
              height: '24px',
              position: 'absolute',
              top: -6,
              left: -4,
              backgroundColor: '#615EFA',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '50%',
            }}
          >
            <Asset type="icon-check-white" />
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <Image src={Guide2} alt="guide2" width={80} height={80} />
          <div
            style={{
              width: '24px',
              height: '24px',
              position: 'absolute',
              top: -6,
              left: -4,
              backgroundColor: colors.red,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '50%',
            }}
          >
            <Asset type="icon-close-white" />
          </div>
        </div>
      </div>
      <Paragraph style={{ marginTop: '10.5px' }} typography="ca">
        얼굴이 잘 보이는 독사진을 올려주세요!
      </Paragraph>
    </>
  );
}
