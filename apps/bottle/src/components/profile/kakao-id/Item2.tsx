import { colors, Paragraph, spacings } from '@bottlesteam/ui';
import { searchDescriptionArea, toggleSearchBox } from './kakaoIdStyle.css';

export function Item2() {
  return (
    <>
      <div className={toggleSearchBox}>
        <div className={searchDescriptionArea}>
          <Paragraph typography="bo" color="neutral900">
            ID 검색 허용
          </Paragraph>
          <p
            style={{
              color: colors.neutral500,
              fontSize: '10px',
              fontWeight: 500,
              lineHeight: '15px',
            }}
          >
            상대방이 내 ID를 검색할 수 있습니다
          </p>
        </div>
        <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              width: 44,
              height: 26,
              borderRadius: 100,
              backgroundColor: '#FAE004',
              position: 'relative',
            }}
          >
            <div
              style={{
                width: 22,
                height: 22,
                borderRadius: '50%',
                position: 'absolute',
                top: 2,
                right: 2,
                backgroundColor: colors.white100,
              }}
            />
          </div>
        </div>
      </div>
      <Paragraph typography="ca" color="black100" style={{ textAlign: 'center', marginTop: spacings.sm }}>
        {'카카오톡 > 친구 추가 > 카카오톡 ID > 내 아이디에서\n아이디 검색 허용을 활성화해 주세요'}
      </Paragraph>
    </>
  );
}
