import { VariantOneProps } from '@bottlesteam/ui';
import { ReactNode } from 'react';
import { FixedButton } from '../../../_step/StepContainer';
import { bodyStyle, layoutStyle, overlayStyle, wrapperStyle } from './bottomSheetStyle.css';

export interface BottomSheetProps {
  body: ReactNode;
  button: ReturnType<typeof FixedButton>;
  isOpen: boolean;
  onClose(): void;
}

function BottomSheetRoot({ button, body, onClose, isOpen }: BottomSheetProps) {
  return (
    <>
      {isOpen && (
        <>
          <div className={overlayStyle} onClick={onClose} />
          <div className={wrapperStyle}>
            <div className={layoutStyle}>
              <div className={bodyStyle}>{body}</div>
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
  return <FixedButton {...props}>{props.children}</FixedButton>;
}

export const BottomSheet = Object.assign(BottomSheetRoot, {
  Overlay: BottomSheetOverlay,
  Button: BottomSheetButton,
});
