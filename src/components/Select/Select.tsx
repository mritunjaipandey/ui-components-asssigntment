import React from 'react';

export interface SelectProps {
  options: string[];
  onChange: (value: string) => void;
}

export const Select: React.FC<SelectProps> = ({ options, onChange }) => {
  return (
    <select onChange={(e) => onChange(e.target.value)}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
