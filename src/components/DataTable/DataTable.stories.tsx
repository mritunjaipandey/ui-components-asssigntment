import type { Meta, StoryObj } from '@storybook/react-webpack5';
import DataTable from "./DataTable";
import { Column } from "@/types";

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

const columns: Column<User>[] = [
  { key: "id", title: "ID", dataIndex: "id", sortable: true },
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "email", title: "Email", dataIndex: "email", sortable: false },
  { key: "age", title: "Age", dataIndex: "age", sortable: true },
];

const sampleData: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com", age: 28 },
  { id: 2, name: "Jane Smith", email: "jane@example.com", age: 34 },
  { id: 3, name: "Mike Johnson", email: "mike@example.com", age: 25 },
];

const meta: Meta<typeof DataTable<User>> = {
  title: "Components/DataTable",
  component: DataTable<User>,
  tags: ["autodocs"],
  argTypes: {
    data: {
      control: false,
      description: "An array of data objects to display in the table.",
      table: { category: "Data" },
    },
    columns: {
      control: false,
      description: "An array of column definitions for the table.",
      table: { category: "Data" },
    },
    loading: {
      control: "boolean",
      description: "If true, the table shows a loading indicator.",
      table: { category: "State" },
    },
    selectable: {
      control: "boolean",
      description: "If true, rows can be selected via checkboxes.",
      table: { category: "Behavior" },
    },
    onRowSelect: {
      action: "rowSelected",
      description: "Callback function fired when rows are selected. Returns an array of the selected rows.",
      table: { category: "Events" },
    },
  },
};
export default meta;

type Story = StoryObj<typeof DataTable<User>>;

export const Default: Story = {
  args: {
    data: sampleData,
    columns,
  },
};

export const Loading: Story = {
  args: {
    data: [],
    columns,
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns,
  },
};

export const Selectable: Story = {
  args: {
    data: sampleData,
    columns,
    selectable: true,
    onRowSelect: (rows) => console.log("Selected rows:", rows),
  },
};
