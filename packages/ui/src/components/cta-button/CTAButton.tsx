import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { VariantOne, VariantOneProps } from './VariantOne/VariantOne';
import { LeftButton } from './VariantTwo/LeftButton';
import { RightButton } from './VariantTwo/RightButton';
import { VariantTwo, VariantTwoProps } from './VariantTwo/VariantTwo';

export type CTAButtonProps = ComponentPropsWithoutRef<'button'> &
  (
    | ({
        variant: 'one';
      } & VariantOneProps)
    | ({
        variant: 'two';
      } & VariantTwoProps)
  );

function isVariantOne(props: CTAButtonProps): props is {
  variant: 'one';
} & VariantOneProps {
  return props.variant === 'one';
}

const CTAButtonImpl = forwardRef<ElementRef<'button'>, CTAButtonProps>((props: CTAButtonProps, ref) => {
  const { children, ...rest } = props;
  return (
    <>
      {isVariantOne(props) ? (
        <VariantOne {...rest} ref={ref}>
          {children}
        </VariantOne>
      ) : (
        <VariantTwo left={props.left} right={props.right} />
      )}
    </>
  );
});

export const CTAButton = Object.assign(CTAButtonImpl, {
  Left: LeftButton,
  Right: RightButton,
});
