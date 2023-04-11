import type { Meta, StoryObj } from '@storybook/react';
import TodoList from './todoList';

const meta: Meta<typeof TodoList> = {
  title: 'TodoList',
  component: TodoList,
};

export default meta;
type Story = StoryObj<typeof TodoList>;

export const Todos: Story = {
  args: {}
};