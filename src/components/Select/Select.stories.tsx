import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
    onChange: (e) => console.log(e.target.value),
  },
};