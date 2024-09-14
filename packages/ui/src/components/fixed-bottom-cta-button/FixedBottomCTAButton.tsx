import { MAX_WIDTH } from '../../constants';
import { CTAButton, CTAButtonProps, isVariantOne } from '../cta-button';
import { buttonStyle, buttonContainer } from './fixedBottomCTAButtonStyle.css';

export type FixedBottomCTAButtonProps = CTAButtonProps;

export function FixedBottomCTAButton(props: FixedBottomCTAButtonProps) {
  return (
    <div className={buttonContainer}>
      <div className={buttonStyle}>
        {isVariantOne(props) ? (
          <CTAButton {...props} style={{ width: '100%', maxWidth: `${MAX_WIDTH}px` }}>
            {props.children}
          </CTAButton>
        ) : (
          <CTAButton {...props} style={{ width: '100%', maxWidth: `${MAX_WIDTH}px` }} />
        )}
      </div>
    </div>
  );
}
