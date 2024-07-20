// import { RecipeVariants } from '@vanilla-extract/recipes';
import { textStyle } from './layout.css';

// type TextVariants = RecipeVariants<typeof textStyle>['typography'];

interface TextProps {
  typography?: 't1' | 't2';
  color?: 'white' | 'black';
  children: React.ReactNode;
}

export function Text({ typography = 't1', color = 'white', children }: TextProps) {
  return <p className={textStyle({ typography, color })}>{children}</p>;
}
