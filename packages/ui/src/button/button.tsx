'use client';

import { RecipeVariants } from '@vanilla-extract/recipes';
import { ReactNode } from 'react';
import { buttonStyle } from './button.css.ts';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant: RecipeVariants<typeof buttonStyle>;
}

export const Button = ({ children, variant }: ButtonProps) => {
  return (
    <button className={buttonStyle(variant)} onClick={() => alert(`Button made with Vanilla Extract`)}>
      ddd {children}
    </button>
  );
};
