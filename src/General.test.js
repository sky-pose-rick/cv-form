import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import General from './General';

describe('General-Info tests', () => {
  beforeEach(() => {
    render(<General />);
  });

  it('General renders', () => {
    expect(screen.getByText(/General/)).toBeInTheDocument();
  });
  it('Contains name element', () => {
    expect(screen.getByText(/Name/)).toBeInTheDocument();
  });
  it('Contains email element', () => {
    expect(screen.getByText(/Email/)).toBeInTheDocument();
  });
  it('Contains number element', () => {
    expect(screen.getByText(/Phone/)).toBeInTheDocument();
  });
  it.todo('Test state changes');
});
