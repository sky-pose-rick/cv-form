import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import General from './General';

describe('General-Info tests', () => {
  beforeEach(() => {
    const genFields = {
      myName: 'Hugh Mann',
      email: 'first@second.com',
      phoneNumber: '867-5309',
    };

    render(<General content={genFields} />);
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

  it('General can be passed information', () => {
    expect(screen.getByText(/Hugh/)).toBeInTheDocument();
  });

  it.todo('Test state changes');
});

it('Three inputs rendered if general info is editable', () => {
  const genFields = {
    myName: 'Hugh Mann',
    email: 'first@second.com',
    phoneNumber: '867-5309',
  };

  render(<General content={genFields} editable />);
  expect(screen.getAllByRole('textbox')[2]).toBeInTheDocument();
});

it('Has a state that changes when inputs are used', () => {
  const genFields = {
    myName: 'Hugh Mann',
    email: 'first@second.com',
    phoneNumber: '867-5309',
  };

  render(<General content={genFields} editable />);
  fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'Todd' } });
  expect(screen.getByDisplayValue('Todd')).toBeInTheDocument();
});
