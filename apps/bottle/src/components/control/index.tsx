import { ButtonProps } from '@bottlesteam/ui';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode, useContext } from 'react';
import { createContext } from 'react';

interface ControlProps<V> {
  value: V | V[] | undefined;
}

function createControlContext<V>() {
  return createContext<ControlProps<V> | null>(null);
}

const ControlContext = createControlContext();

export function Control<V>({ value, children }: ControlProps<V> & { children: ReactNode }) {
  return <ControlContext.Provider value={{ value }}>{children}</ControlContext.Provider>;
}

function useControlValue() {
  const controlContext = useContext(ControlContext);
  if (controlContext == null) {
    throw new Error('Wrap Control Context');
  }

  return controlContext;
}

type ItemProps = Partial<ButtonProps> & {
  children: ReactNode;
  value: any;
};
function Item(props: ItemProps) {
  const { value: controlValue } = useControlValue();

  const _Slot = Slot as any;

  const selected = Array.isArray(controlValue) ? controlValue.includes(props.value) : controlValue === props.value;

  return <_Slot {...props} selected={selected} />;
}

Control.Item = Item;

export function toggle<V>(prev: V, next: V) {
  if (prev === next) {
    return undefined;
  }
  return next;
}
