import type { Meta, StoryObj } from '@storybook/vue3';
import { CustomButton } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Components/Button',
  component: CustomButton,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    // variant: { control: 'select' },
    // size: { control: 'select' },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    // variant: { control: 'select', options: ['primary', 'error', 'ghost', 'text'] },
  },
  args: {
    default: 'Click me!',
  }, // default value
} satisfies Meta<typeof CustomButton>;

export default meta;

type Story = StoryObj<typeof meta>;

// function render(args: any) {
//   return {
//     components: { HButton },
//     setup() {
//       return { args };
//     },
//     template: '<HButton v-bind="args">Button</HButton>',
//   };
// }

export const Default: Story = {};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    ...Default.args,
    variant: 'primary',
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    variant: 'error',
  },
};
