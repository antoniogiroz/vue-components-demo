import type { Size } from '../component.types';

export type ButtonType = 'submit' | 'reset' | 'button';
export type ButtonVariant = 'primary' | 'error' | 'ghost' | 'text';

export interface ButtonProps {
  size?: Size;
  disabled?: boolean;
  type?: ButtonType;
  variant?: ButtonVariant;
  outline?: boolean;
  loading?: boolean;
  iconOnly?: boolean;
}

export type ButtonEmits = {  
  click: []
}
