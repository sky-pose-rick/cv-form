import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App tests', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('App renders', () => {
    expect(screen.getByText(/CV form/)).toBeInTheDocument();
  });
  it('Contains general info component', () => {
    expect(screen.getByText(/General/)).toBeInTheDocument();
  });
  it('Contains schooling component', () => {
    expect(screen.getByText(/Schooling/)).toBeInTheDocument();
  });
  it('Contains experience component', () => {
    expect(screen.getByText(/Experience/)).toBeInTheDocument();
  });
  it.todo('Test state changes');
});
