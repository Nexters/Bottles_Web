// import { RecipeVariants } from '@vanilla-extract/recipes';
import { textStyle } from './layout.css';

// type TextVariants = RecipeVariants<typeof textStyle>['typography'];

interface TextProps {
  typography: 't1' | 't2';
  children: React.ReactNode;
}

export function Text({ typography, children }: TextProps) {
  return <p className={textStyle({ typography })}>{children}</p>;
}
