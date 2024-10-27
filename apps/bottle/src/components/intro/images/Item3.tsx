import { Asset, colors, Paragraph, radius, spacings } from '@bottlesteam/ui';
import Image from 'next/image';
import ProfileEx from './profileEx.webp';

export function Item3() {
  return (
    <>
      <div
        style={{
          width: 296,
          height: 72,
          backgroundColor: colors.neutral100,
          borderRadius: 20,
          padding: `${radius.sm} ${radius.md}`,
          marginTop: spacings.sm,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: spacings.xs,
          }}
        >
          <Paragraph typography="st1" color="neutral900">
            김*빈
          </Paragraph>
          <div style={{ display: 'flex', gap: 19, alignItems: 'center' }}>
            <Paragraph typography="ca" color="neutral900">
              24세
            </Paragraph>
            <Paragraph typography="ca" color="neutral900">
              ENFP
            </Paragraph>
            <div style={{ display: 'flex', gap: spacings.xxs, alignItems: 'center' }}>
              <Asset type="icon-clock" />
              <Paragraph typography="ca" color="neutral900">
                34분 전 접속
              </Paragraph>
            </div>
          </div>
        </div>
        <div style={{ position: 'relative', width: 48, height: 48, borderRadius: '50%', overflow: 'hidden' }}>
          <Image src={ProfileEx} alt="profile-example" style={{ objectFit: 'cover' }} fill />
        </div>
      </div>
      <Paragraph typography="ca" style={{ textAlign: 'center', marginTop: spacings.sm }}>
        {'프로필 사진은 나의 첫인상이 될 거예요.\n필수로 등록해야 프로필 생성을 완료할 수 있어요!'}
      </Paragraph>
    </>
  );
}
