import { ReactNode } from 'react';
import { VariantOneProps, CTAButton } from '../cta-button';
import {
  bodyStyle,
  buttonContainer,
  buttonStyle,
  layoutStyle,
  overlayStyle,
  wrapperStyle,
} from './bottomSheetStyle.css';

export interface BottomSheetProps {
  body: ReactNode;
  button: ReturnType<typeof BottomSheetButton>;
  isOpen: boolean;
  onClose(): void;
  size?: 'sm' | 'lg';
}

function BottomSheetImpl({ button, body, onClose, isOpen, size = 'lg' }: BottomSheetProps) {
  return (
    <>
      {isOpen && (
        <>
          <div className={overlayStyle} onClick={onClose} />
          <div className={wrapperStyle}>
            <div className={layoutStyle({ size })}>
              <div className={bodyStyle({ size })}>{body}</div>
              {button}
            </div>
          </div>
        </>
      )}
    </>
  );
}

function BottomSheetOverlay() {
  return <div className={overlayStyle} />;
}

function BottomSheetButton(props: VariantOneProps) {
  return (
    <div className={buttonContainer}>
      <div className={buttonStyle}>
        <CTAButton variant="one" style={{ width: '100%', maxWidth: '500px' }} {...props}>
          {props.children}
        </CTAButton>
      </div>
    </div>
  );
}

export const BottomSheet = Object.assign(BottomSheetImpl, {
  Overlay: BottomSheetOverlay,
  Button: BottomSheetButton,
});
