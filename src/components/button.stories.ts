import type { Meta, StoryObj } from '@storybook/react';
import CounterButton from './button';

const meta: Meta<typeof CounterButton> = {
  title: 'CounterButton',
  component: CounterButton,
};

export default meta;
type Story = StoryObj<typeof CounterButton>;

export const ButtonWithOneClick: Story = {
  args: {
    count: 1    
  },
};