import { ChangeEvent, ReactNode, useId } from 'react';
import { Asset } from '../asset';
import { Paragraph } from '../paragraph';
import { agreementItemStyle, checkboxStyle } from './agreementStyle.css';

export interface AgreementItemProps {
  checked: boolean;
  children: ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function AgreementItem({ onChange, checked, children }: AgreementItemProps) {
  const id = useId();

  return (
    <li>
      <label htmlFor={id} className={agreementItemStyle}>
        <input id={id} type="checkbox" checked={checked} onChange={onChange} className={checkboxStyle} />
        <Asset type={checked ? 'icon-check-colored' : 'icon-check'} />
        <Paragraph typography="bo" color="neutral600" style={{ textAlign: 'start' }}>
          {children}
        </Paragraph>
      </label>
    </li>
  );
}

export function AgreementAgreeAllItem({ checked, onChange, children }: AgreementItemProps) {
  const id = useId();

  return (
    <label htmlFor={id} className={agreementItemStyle}>
      <input id={id} type="checkbox" checked={checked} onChange={onChange} className={checkboxStyle} />
      <Asset type={checked ? 'icon-check-colored' : 'icon-check'} />
      <Paragraph typography="st1" color="neutral900">
        {children}
      </Paragraph>
    </label>
  );
}
