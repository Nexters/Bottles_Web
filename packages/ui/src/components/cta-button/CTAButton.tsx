import { ElementRef, forwardRef } from 'react';
import { VariantOne, VariantOneProps } from './VariantOne/VariantOne';
import { LeftButton } from './VariantTwo/LeftButton';
import { RightButton } from './VariantTwo/RightButton';
import { VariantTwo, VariantTwoProps } from './VariantTwo/VariantTwo';
import { isVariantOne } from './utils';

export type CTAButtonProps =
  | ({
      variant: 'one';
    } & VariantOneProps)
  | ({
      variant: 'two';
    } & VariantTwoProps);

const CTAButtonImpl = forwardRef<ElementRef<'button'>, CTAButtonProps>((props: CTAButtonProps, ref) => {
  return isVariantOne(props) ? (
    <VariantOne {...props} ref={ref} />
  ) : (
    <VariantTwo {...props} left={props.left} right={props.right} />
  );
});

export const CTAButton = Object.assign({}, CTAButtonImpl, {
  Left: LeftButton,
  Right: RightButton,
});

export type { VariantOneProps, VariantTwoProps };
