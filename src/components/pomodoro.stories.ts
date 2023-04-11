import type { Meta, StoryObj } from '@storybook/react';
import Pomodoro from './pomodoro';

const meta: Meta<typeof Pomodoro> = {
  title: 'Pomodoro',
  component: Pomodoro,
};

export default meta;
type Story = StoryObj<typeof Pomodoro>;

export const PomodoroTimer: Story = {
  args: {}
};