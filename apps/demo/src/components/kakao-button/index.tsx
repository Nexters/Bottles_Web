import { Asset, Button, ButtonProps, colors, typography } from '@bottlesteam/ui';
import { buttonContainer, logoContainer } from './kakaoButtonStyle.css';

type KakaoButtonProps = Pick<ButtonProps, 'onClick'>;

export function KakaoButton({ onClick }: KakaoButtonProps) {
  return (
    <div className={buttonContainer}>
      <Button
        onClick={onClick}
        variant="solid"
        size="lg"
        style={{
          backgroundColor: '#FEE500',
          color: colors.black100,
          ...typography.st1,
          width: 'calc(100% - 32px)',
        }}
      >
        <div className={logoContainer}>
          <Asset type="kakao-logo" />
        </div>
        카카오 로그인
      </Button>
    </div>
  );
}
