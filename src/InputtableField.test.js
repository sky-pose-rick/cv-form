import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputtableField from './InputtableField';

const mockOnChange = jest.fn(() => {});

it('Inputtable field renders', () => {
  render(<InputtableField label="Name" value="Mike" />);
  expect(screen.getByText(/Mike/)).toBeInTheDocument();
});
it('Contains an input when editable', () => {
  render(<InputtableField label="Name" value="Mike" editable onChange={mockOnChange} />);
  expect(screen.getByRole('textbox')).toBeInTheDocument();
});
it('onChange is called', () => {
  render(<InputtableField label="Name" value="Mike" editable onChange={mockOnChange} />);
  fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Todd' } });
  expect(mockOnChange.mock.calls.length).toBe(1);
});
