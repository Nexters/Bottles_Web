import { Stepper } from '@/components/stepper';
import { FixedBottomCTAButton, Paragraph, ParagraphProps, VariantOneProps, VariantTwoProps } from '@bottlesteam/ui';
import { ReactNode } from 'react';
import { containerStyle } from './stepStyle.css';

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

function FixedButton(props: VariantOneProps) {
  return <FixedBottomCTAButton variant="one" {...props} />;
}

export const Step = Object.assign(StepContainer, {
  Title,
  Description,
  Subtitle,
  FixedButton,
});
