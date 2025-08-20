import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Select } from './Select';

test('renders select component', () => {
  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ];
  const handleChange = jest.fn();
  const { getByText } = render(<Select options={options} onChange={(e) => handleChange(e.target.value)} />);
  options.forEach((option) => {
    expect(getByText(option.label)).toBeInTheDocument();
  });
});

test('calls onChange when an option is selected', () => {
  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ];
  const handleChange = jest.fn();
  const { container } = render(<Select options={options} onChange={(e) => handleChange(e.target.value)} />);
  const select = container.querySelector('select');
  if (select) {
    fireEvent.change(select, { target: { value: '2' } });
    expect(handleChange).toHaveBeenCalledWith('2');
  }
});
