import { ElementType, PropsWithChildren, ComponentPropsWithoutRef } from 'react';

export type PolymorphicAsProp<E extends ElementType> = {
  as?: E;
};

export type PolymorphicProps<E extends ElementType> = PropsWithChildren<
  ComponentPropsWithoutRef<E> & PolymorphicAsProp<E>
>;

export type DefaultProps = {
  className: string;
};
