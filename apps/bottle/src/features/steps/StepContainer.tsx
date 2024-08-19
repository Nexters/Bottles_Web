import { Stepper } from '@/components/stepper';
import { CTAButton, Paragraph, ParagraphProps, VariantOneProps, VariantTwoProps } from '@bottlesteam/ui';
import { ReactNode } from 'react';
import { buttonContainer, buttonStyle, containerStyle } from './stepStyle.css';

interface Props {
  children: ReactNode;
  stepper?: { current: number; max: number };
}

function StepContainer({ children, stepper }: Props) {
  return (
    <div className={containerStyle}>
      {stepper != null && <Stepper current={stepper.current} max={stepper.max} />}
      {children}
    </div>
  );
}

function Title({ children, ...rest }: Omit<ParagraphProps, 'typography' | 'color'>) {
  return (
    <Paragraph typography="t1" color="black100" {...rest}>
      {children}
    </Paragraph>
  );
}

function Description({ children, ...rest }: Omit<ParagraphProps, 'typography' | 'color'>) {
  return (
    <Paragraph typography="bo" color="neutral600" {...rest}>
      {children}
    </Paragraph>
  );
}
function Subtitle({ children, ...rest }: Omit<ParagraphProps, 'typography' | 'color'>) {
  return (
    <Paragraph typography="st2" color="neutral600" {...rest}>
      {children}
    </Paragraph>
  );
}

type FixedButtonProps =
  | ({
      variant?: 'one';
    } & VariantOneProps)
  | ({
      variant: 'two';
    } & VariantTwoProps);

function isVariantOne(props: FixedButtonProps): props is VariantOneProps {
  return props.variant !== 'two';
}

// FIXME: Move to UI package
export function FixedButton(props: FixedButtonProps) {
  return (
    <div className={buttonContainer}>
      <div className={buttonStyle}>
        {isVariantOne(props) ? (
          <CTAButton variant="one" {...props} style={{ width: '100%', maxWidth: '500px' }}>
            {props.children}
          </CTAButton>
        ) : (
          <CTAButton {...props} variant="two" style={{ width: '100%', maxWidth: '500px' }} />
        )}
      </div>
    </div>
  );
}

export const Step = Object.assign(StepContainer, {
  Title,
  Description,
  Subtitle,
  FixedButton,
});
