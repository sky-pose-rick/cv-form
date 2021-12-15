import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WorkItem from './WorkItem';

describe('WorkItem group 1', () => {
  const mockOnDelete = jest.fn(() => {});

  beforeEach(() => {
    const content = {
      company: 'Laughter House',
      position: 'Junior Underwater Basket Weaver',
      startYear: '1816',
      endYear: '1818',
      tasks: {},
    };
    render(<WorkItem content={content} onDelete={mockOnDelete} />);
  });

  it('WorkItem renders', () => {
    expect(screen.getAllByText(/./)[0]).toBeInTheDocument();
  });

  it('Contains appropriate labels', () => {
    expect(screen.getByText(/Company/)).toBeInTheDocument();
    expect(screen.getByText(/Start/)).toBeInTheDocument();
  });

  it('Contains values passed as props', () => {
    expect(screen.getByText(/Basket/)).toBeInTheDocument();
    expect(screen.getByText(/1818/)).toBeInTheDocument();
  });

  it('onDelete is called', () => {
    fireEvent.click(screen.getByText(/Delete/));
    expect(mockOnDelete.mock.calls.length).toBe(1);
  });
});
