import type { Meta, StoryObj } from '@storybook/react';
import CombinedClickCounter from './combinedClickCounter';

const meta: Meta<typeof CombinedClickCounter> = {
  title: 'CombinedClickCounter',
  component: CombinedClickCounter,
};

export default meta;
type Story = StoryObj<typeof CombinedClickCounter>;

export const Buttons: Story = {
  args: {}
};