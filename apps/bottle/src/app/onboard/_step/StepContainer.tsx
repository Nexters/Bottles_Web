import { CTAButton, Paragraph, ParagraphProps, VariantOneProps } from '@bottlesteam/ui';
import { ReactNode } from 'react';
import { buttonContainer, buttonStyle, containerStyle } from './stepStyle.css';

interface Props {
  children: ReactNode;
}

function StepContainer({ children }: Props) {
  return <div className={containerStyle}>{children}</div>;
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

export function FixedButton(props: VariantOneProps) {
  return (
    <div className={buttonContainer}>
      <div className={buttonStyle}>
        <CTAButton variant="one" {...props} style={{ width: '100%', maxWidth: '500px' }}>
          {props.children}
        </CTAButton>
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
