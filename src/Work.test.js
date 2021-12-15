import React from 'react';
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Work from './Work';

describe('Work group 1', () => {
  beforeEach(() => {
    const workItem1 = {
      company: 'Laughter House',
      position: 'Junior Underwater Basket Weaver',
      startYear: '1816',
      endYear: '1818',
      tasks: {
        task1: 'Cry a lot',
        itemizedItem2: 'Take a dive',
      },
    };

    const workItem2 = {
      company: 'Leisure World',
      position: 'Bed Tester',
      startYear: '1820',
      endYear: '1840',
      tasks: {
        task1: 'Maxxing the Relaxxing',
      },
    };

    const content = {
      jobs: {
        item1: workItem1,
        item2: workItem2,
      },
    };

    const mockParentFunc = jest.fn(() => {});
    render(<Work content={content} onSubmit={mockParentFunc} />);
  });

  it('Work renders', () => {
    expect(screen.getAllByText(/./)[0]).toBeInTheDocument();
  });

  it('Renders two items', () => {
    expect(screen.getAllByText(/Company/).length).toBe(2);
  });

  it('delete button works', () => {
    const delBtn = screen.getAllByText(/Delete Job/)[0];
    fireEvent.click(delBtn);
    expect(screen.getAllByText(/Company/).length).toBe(1);
  });
});

it('The add button works', async () => {
  // render a blank component
  // click button twice and check if two workItems appears
  render(<Work />);

  const addBtn = screen.getByText(/Add/);
  fireEvent.click(addBtn);
  fireEvent.click(addBtn);
  expect(screen.getAllByText(/Company/).length).toBe(2);
});
