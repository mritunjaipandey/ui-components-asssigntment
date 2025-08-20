import React, { useState } from "react";
import InputField from "./components/InputField";
import { DataTable } from "./components/DataTable";

const mockData = [
  { id: 1, name: "John Doe", email: "john@example.com", age: 28 },
  { id: 2, name: "Jane Smith", email: "jane@example.com", age: 34 },
  { id: 3, name: "Mike Johnson", email: "mike@example.com", age: 25 },
];

const columns = [
  { key: "id", title: "ID", dataIndex: "id", sortable: true },
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "email", title: "Email", dataIndex: "email" },
  { key: "age", title: "Age", dataIndex: "age", sortable: true },
];

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">UI Components Demo</h1>

      {/* InputField Demo */}
      <InputField
        label="Username"
        placeholder="Enter username"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        helperText="This is a helper text"
      />

      {/* DataTable Demo */}
      <DataTable data={mockData} columns={columns} selectable />
    </div>
  );
}

export default App;
