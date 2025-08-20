import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';
import InputField from '../components/InputField/InputField';
import DataTable from '../components/DataTable/DataTable';

const meta: Meta = {
  title: 'Screenshot Demo',
  component: () => (
    <div className="p-4 space-y-8">
      {/* InputField Demo */}
      <div className="w-full max-w-md">
        <InputField
          label="Label"
          placeholder="Placeholder"
          helperText="Helper text"
          errorMessage="Error message"
          invalid={true}
          type="password"
          showToggleButton={true}
        />
      </div>

      {/* DataTable Demo */}
      <div className="w-full max-w-2xl">
        <DataTable
          columns={[
            { key: 'name', title: 'Name', dataIndex: 'name' },
            { key: 'age', title: 'Age', dataIndex: 'age' },
            { key: 'email', title: 'Email', dataIndex: 'email' },
          ]}
          data={[
            { name: 'Alice', age: 24, email: 'alice@example.com' },
            { name: 'Bob', age: 30, email: 'bob@example.com' },
            { name: 'Charlie', age: 29, email: 'charlie@example.c' },
          ]}
          selectable={true}
        />
      </div>
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof meta> = {};
