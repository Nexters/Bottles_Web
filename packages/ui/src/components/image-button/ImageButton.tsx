import { Slot } from '@radix-ui/react-slot';
import { ComponentPropsWithoutRef, ReactNode, Ref, forwardRef } from 'react';
import { imageButtonStyle } from './imageButtonStyle.css';

export interface ImageButtonProps<ImageNode extends ReactNode> extends ComponentPropsWithoutRef<'button'> {
  size: 'sm' | 'md';
  asChild?: boolean;
  children: ReactNode;
  image: (width: number, height: number) => ImageNode;
}

const ImageButtonComponent = <ImageNode extends ReactNode>(
  { size, children, asChild, image, ...rest }: ImageButtonProps<ImageNode>,
  ref: Ref<HTMLButtonElement>
) => {
  const Component = asChild ? Slot : 'button';

  const imageWidth = size === 'sm' ? 16 : 100;
  const imageHeight = size === 'sm' ? 16 : 100;

  return (
    <Component className={imageButtonStyle({ size })} ref={ref} {...rest}>
      {image(imageWidth, imageHeight)}
      <span>{children}</span>
    </Component>
  );
};

export const ImageButton = forwardRef(ImageButtonComponent);
