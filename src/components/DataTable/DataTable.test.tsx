import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import DataTable from "./DataTable";
import { Column } from "@/types";

interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

const testColumns: Column<User>[] = [
  {
    key: "name",
    title: "Name",
    dataIndex: "name",
    sortable: true,
  },
  {
    key: "age",
    title: "Age",
    dataIndex: "age",
    sortable: true,
  },
  {
    key: "email",
    title: "Email",
    dataIndex: "email",
    sortable: false,
  },
];

const testData: User[] = [
  { id: 1, name: "Charlie", age: 30, email: "charlie@example.com" },
  { id: 2, name: "Alice", age: 25, email: "alice@example.com" },
  { id: 3, name: "Bob", age: 35, email: "bob@example.com" },
];

describe("DataTable Component", () => {
  test("renders headers and data correctly", () => {
    render(<DataTable<User> columns={testColumns} data={testData} />);

    // Check headers
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Age")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();

    // Check data
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("25")).toBeInTheDocument();
    expect(screen.getByText("alice@example.com")).toBeInTheDocument();
  });

  test("sorts data when a sortable header is clicked", () => {
    render(<DataTable<User> columns={testColumns} data={testData} />);

    const nameHeader = screen.getByText("Name");
    
    const getRowText = (rowIndex: number) => {
        return screen.getAllByRole("row")[rowIndex].textContent;
    }

    // Initial order: Charlie, Alice, Bob
    expect(getRowText(1)).toContain("Charlie");
    expect(getRowText(2)).toContain("Alice");
    expect(getRowText(3)).toContain("Bob");

    // Sort by name ascending: Alice, Bob, Charlie
    fireEvent.click(nameHeader);
    expect(getRowText(1)).toContain("Alice");
    expect(getRowText(2)).toContain("Bob");
    expect(getRowText(3)).toContain("Charlie");

    // Sort by name descending: Charlie, Bob, Alice
    fireEvent.click(nameHeader);
    expect(getRowText(1)).toContain("Charlie");
    expect(getRowText(2)).toContain("Bob");
    expect(getRowText(3)).toContain("Alice");
  });

  test("handles single and multiple row selection and deselection", () => {
    const handleRowSelect = jest.fn();
    render(
      <DataTable<User>
        columns={testColumns}
        data={testData}
        selectable
        onRowSelect={handleRowSelect}
      />
    );

    const charlieRow = screen.getByText("Charlie").closest("tr")!;
    const aliceRow = screen.getByText("Alice").closest("tr")!;

    const charlieCheckbox = within(charlieRow).getByRole("checkbox");
    const aliceCheckbox = within(aliceRow).getByRole("checkbox");

    // 1. Select the first row (Charlie)
    fireEvent.click(charlieCheckbox);
    expect(handleRowSelect).toHaveBeenCalledTimes(1);
    expect(handleRowSelect).toHaveBeenCalledWith([testData[0]]); // Charlie

    // 2. Select the second row (Alice)
    fireEvent.click(aliceCheckbox);
    expect(handleRowSelect).toHaveBeenCalledTimes(2);
    expect(handleRowSelect).toHaveBeenCalledWith([testData[0], testData[1]]); // Charlie, Alice

    // 3. Deselect the first row (Charlie)
    fireEvent.click(charlieCheckbox);
    expect(handleRowSelect).toHaveBeenCalledTimes(3);
    expect(handleRowSelect).toHaveBeenCalledWith([testData[1]]); // Only Alice remains
  });

  test("shows loading indicator when loading", () => {
    render(<DataTable<User> columns={testColumns} data={[]} loading />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("shows no data message when data is empty", () => {
    render(<DataTable<User> columns={testColumns} data={[]} />);
    expect(screen.getByText("No data available")).toBeInTheDocument();
  });
});