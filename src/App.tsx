import React, { useState } from "react";
import DataTable, { Column } from "./components/DataTable";
import InputField from "./components/InputField";
import { Select } from "./components/Select";

// Row type for DataTable
interface RowData {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Mock Data
const mockData: RowData[] = [
  { id: 1, name: "John Doe", email: "john@example.com", age: 28 },
  { id: 2, name: "Jane Smith", email: "jane@example.com", age: 34 },
  { id: 3, name: "Mike Johnson", email: "mike@example.com", age: 25 },
];

// Columns (strictly typed with RowData)
const columns: Column<RowData>[] = [
  { key: "id", title: "ID", dataIndex: "id", sortable: true },
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "email", title: "Email", dataIndex: "email" },
  { key: "age", title: "Age", dataIndex: "age", sortable: true },
];

function App() {
  const [value, setValue] = useState("");
  const [selectValue, setSelectValue] = useState("");

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">UI Components Demo</h1>

      {/* DataTable Demo FIRST */}
      <DataTable<RowData> data={mockData} columns={columns} selectable />

      {/* InputField Demo */}
      <InputField
        label="Username"
        placeholder="Enter username"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        helperText="This is a helper text"
      />

      {/* Select Demo */}
      <Select
        label="Choose an option"
        options={[
          { value: "1", label: "Option 1" },
          { value: "2", label: "Option 2" },
          { value: "3", label: "Option 3" },
        ]}
        value={selectValue}
        onChange={(e) => setSelectValue(e.target.value)}
        placeholder="Select an option"
      />
    </div>
  );
}

export default App;
