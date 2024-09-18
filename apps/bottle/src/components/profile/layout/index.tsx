import { FixedBottomCTAButton, Paragraph, ParagraphProps, spacings, VariantOneProps } from '@bottlesteam/ui';
import { ReactNode } from 'react';
import { containerStyle } from './profileLayoutStyle.css';

interface Props {
  children: ReactNode;
}

function ProfileContainer({ children }: Props) {
  return <div className={containerStyle}>{children}</div>;
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

export const ProfileLayout = Object.assign(ProfileContainer, {
  Title,
  Description,
  Subtitle,
  FixedButton,
});
