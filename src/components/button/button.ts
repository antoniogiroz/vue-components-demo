import type { Size } from '../component.types';

export type ButtonType = 'submit' | 'reset' | 'button';
export type ButtonVariant = 'primary' | 'error' | 'ghost' | 'text';

export interface ButtonProps {
  size?: Size;
  variant?: ButtonVariant;
}

// export const buttonProps = {
//   /**
//    * The size of the button allows only some values
//    * @values small, medium, large
//    */
//   size: {
//     type: String as PropType<Size>,
//     default: 'md',
//   },
//   disabled: {
//     type: Boolean,
//   },
//   type: {
//     type: String as PropType<ButtonType>,
//     default: 'button',
//   },
//   variant: {
//     type: String as PropType<ButtonVariant>,
//   },
//   outline: {
//     type: Boolean,
//   },
//   loading: {
//     type: Boolean,
//   },
//   iconOnly: {
//     type: Boolean,
//   },
// };

// export interface ButtonProps {
//   size?: Size;
//   disabled?: boolean;
//   type?: ButtonType;
//   variant?: ButtonVariant;
//   outline?: boolean;
//   loading?: boolean;
//   iconOnly?: boolean;
// }

export const buttonEmits = {
  click: (event: MouseEvent) => event instanceof MouseEvent,
};

// export type ButtonProps = ExtractPublicPropTypes<typeof buttonProps>;
export type ButtonEmits = typeof buttonEmits;
