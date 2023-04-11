import type { Meta, StoryObj } from '@storybook/react';
import ClickCounter from './clickCounter';

const meta: Meta<typeof ClickCounter> = {
  title: 'ClickCounter',
  component: ClickCounter,
};

export default meta;
type Story = StoryObj<typeof ClickCounter>;

export const Button: Story = {
  args: {
    name: 'test'    
  },
};