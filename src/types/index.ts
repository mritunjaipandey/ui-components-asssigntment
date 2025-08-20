// Common input sizes
export type InputSize = "sm" | "md" | "lg";

// Variants for InputField
export type InputVariant = "filled" | "outlined" | "ghost";

// Props for InputField
export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: InputVariant;
  size?: InputSize;
  type?: 'text' | 'password';
  showToggleButton?: boolean;
}

// Column type for DataTable
export interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}

// Props for DataTable
export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}
