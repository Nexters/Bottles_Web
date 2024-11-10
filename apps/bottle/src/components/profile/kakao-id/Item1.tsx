import { Asset, colors, Paragraph, spacings } from '@bottlesteam/ui';
import { idSearchBox } from './kakaoIdStyle.css';

export function Item1() {
  return (
    <>
      <div className={idSearchBox}>
        <Asset type="icon-warning" />
        <p
          style={{
            color: colors.neutral500,
            fontSize: '10px',
            lineHeight: '15px',
            fontWeight: 500,
          }}
        >
          {'아이디 검색 결과가 없습니다.'}
        </p>
      </div>
      <Paragraph color="black100" typography="ca" style={{ marginTop: spacings.sm }}>
        {'매칭이 원활하게 이루어질 수 있도록\n오타가 없는지 한 번 더 확인해 주세요'}
      </Paragraph>
    </>
  );
}
