import type { Meta, StoryObj } from '@storybook/angular';
import Button from './button.component';
import { ButtonTypeOptions } from 'src/app/enum/enum';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  render: (args: Button) => ({
    props: {
      ...args
    },
  }),
  argTypes: {
    buttonType: {
      options: Object.values(ButtonTypeOptions),
      control: {
        type: 'select',
      },
      description: 'tipo do botão',
    },
    label: {
      description: 'nome do botão',
    },
    disabled: {
      description: 'desativar o botão'      
    },
    backgroundColor: {
      control: {
        type: 'color',
      },
      description: 'definir cor do background do botão'      
    }
  },
};

export default meta;
type Story = StoryObj<Button>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const BotãoDefault: Story = {
  args: {
    label: 'Button',
    buttonType: ButtonTypeOptions.default,
    disabled: false,
  },
};

export const BotãoSecondaryOutline: Story = {
  args: {
    label: 'Button',
    buttonType: ButtonTypeOptions.secondaryOutline,
    disabled: false,
  },
};

