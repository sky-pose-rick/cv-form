import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputtableField from './InputtableField';

it('Inputtable field renders', () => {
  render(<InputtableField />);
  expect(screen.getByText(/Mike/)).toBeInTheDocument();
});
/* it('Contains name element', () => {
  expect(screen.getByText(/Name/)).toBeInTheDocument();
});
it('Contains email element', () => {
  expect(screen.getByText(/Email/)).toBeInTheDocument();
});
it('Contains number element', () => {
  expect(screen.getByText(/Phone/)).toBeInTheDocument();
});
it.todo('Test state changes'); */
