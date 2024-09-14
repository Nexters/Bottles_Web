import { CTAButtonProps, VariantOneProps } from './CTAButton';

export function isVariantOne(props: CTAButtonProps): props is {
  variant: 'one';
} & VariantOneProps {
  return props.variant === 'one';
}
