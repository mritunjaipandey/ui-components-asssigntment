import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Select } from './Select';

test('renders select component', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const handleChange = jest.fn();
  const { getByText } = render(<Select options={options} onChange={handleChange} />);
  options.forEach((option) => {
    expect(getByText(option)).toBeInTheDocument();
  });
});

test('calls onChange when an option is selected', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const handleChange = jest.fn();
  const { container } = render(<Select options={options} onChange={handleChange} />);
  const select = container.querySelector('select');
  if (select) {
    fireEvent.change(select, { target: { value: 'Option 2' } });
    expect(handleChange).toHaveBeenCalledWith('Option 2');
  }
});
