import { ComponentProps, ReactNode } from 'react';
import { AgreementAgreeAllItem, AgreementItem } from './AgreementItem';
import { agreementListContainerStyle, containerStyle, separatorStyle } from './agreementStyle.css';

export interface AgreementProps extends ComponentProps<'div'> {
  agreeAll: ReactNode;
  items: ReactNode;
}

function AgreementRoot({ agreeAll, items, ...props }: AgreementProps) {
  return (
    <section className={containerStyle} {...props}>
      {agreeAll}
      <div className={separatorStyle} />
      <ul className={agreementListContainerStyle}>{items}</ul>
    </section>
  );
}

export const Agreement = Object.assign(AgreementRoot, {
  AgreeAllItem: AgreementAgreeAllItem,
  Item: AgreementItem,
});
