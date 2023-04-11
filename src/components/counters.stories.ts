import type { Meta, StoryObj } from '@storybook/react';
import Counters from './counters';

const meta: Meta<typeof Counters> = {
  title: 'Counters',
  component: Counters,
};

export default meta;
type Story = StoryObj<typeof Counters>;

export const AllButtons: Story = {
  args: {}
};