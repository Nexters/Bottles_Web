import { ComponentProps, ReactNode } from 'react';
import { ParagraphProps, Paragraph, VariantOneProps, FixedBottomCTAButton } from '../../components';
import { spacings } from '../../foundations';
import { containerStyle } from './layoutStyle.css';

export interface LayoutProps {
  children: ReactNode;
  hasCTAButton?: boolean;
}

function LayoutContainer({ children, hasCTAButton = true }: LayoutProps) {
  return <div className={containerStyle({ hasCTAButton })}>{children}</div>;
}

function Contents(props: ComponentProps<'div'>) {
  return (
    <div style={{ padding: '0 16px', ...props.style }} {...props}>
      {props.children}
    </div>
  );
}

function Title({ children, ...rest }: Omit<ParagraphProps, 'typography' | 'color'>) {
  return (
    <Paragraph style={{ marginTop: spacings.xl }} typography="t1" color="black100" {...rest}>
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

export const Layout = Object.assign(LayoutContainer, {
  Contents,
  Title,
  Description,
  Subtitle,
  FixedButton,
});
