import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from './input.component';

const meta: Meta<InputComponent> = {
  title: 'Components/Input',
  component: InputComponent,
  tags: ['autodocs'],
  render: (args: InputComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {
    label: {
      description: 'label do input',
    },
    disabled: {
      description: 'desativar o input',
      defaultValue: 'nao funciona'
    },
  },
};

export default meta;
type Story = StoryObj<InputComponent>;

export const InputDefault: Story = {
  args: {
    label: 'Label',
    disabled: false,
  },
};