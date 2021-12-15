import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EduItem from './EduItem';

describe('EduItem group 1', () => {
  beforeEach(() => {
    const content = {
      school: 'Clown College',
      degree: 'Underwater Basket Weaving',
      startYear: '1805',
      endYear: '1818',
    };

    render(<EduItem content={content} />);
  });

  it('EduItem renders', () => {
    expect(screen.getAllByText(/./)[0]).toBeInTheDocument();
  });

  it('Contains appropriate labels', () => {
    expect(screen.getByText(/School/)).toBeInTheDocument();
    expect(screen.getByText(/Start/)).toBeInTheDocument();
  });

  it('Contains values passed as props', () => {
    expect(screen.getAllByText(/Basket/).length).toBeGreaterThan(0);
    expect(screen.getByText(/1818/)).toBeInTheDocument();
  });
});

it('onDelete is called', () => {
  const content = {
    school: 'Clown College',
    degree: 'Underwater Basket Weaving',
    startYear: '1805',
    endYear: '1818',
  };

  const mockOnDelete = jest.fn(() => {});

  render(<EduItem content={content} onDelete={mockOnDelete} />);
  fireEvent.click(screen.getByText(/Delete/));
  expect(mockOnDelete.mock.calls.length).toBe(1);
});
