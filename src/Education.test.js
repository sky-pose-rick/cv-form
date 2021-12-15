import React from 'react';
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Education from './Education';

describe('Education group 1', () => {
  beforeEach(() => {
    const eduItem1 = {
      school: 'Clown College',
      degree: 'Underwater Basket Weaving',
      startYear: '1805',
      endYear: '1818',
    };

    const eduItem2 = {
      school: 'Clown College Deluxe',
      degree: 'Advanced Basket Air Drying',
      startYear: '1818',
      endYear: '1820',
    };

    const content = {
      degrees: {
        item1: eduItem1,
        item2: eduItem2,
      },
    };

    const mockParentFunc = jest.fn(() => {});
    render(<Education content={content} onSubmit={mockParentFunc} />);
  });

  it('Education renders', () => {
    expect(screen.getAllByText(/./)[0]).toBeInTheDocument();
  });

  it('Renders two items', () => {
    expect(screen.getAllByText(/End/).length).toBe(2);
  });

  it('delete button works', () => {
    const delBtn = screen.getAllByText(/Delete/)[0];
    fireEvent.click(delBtn);
    expect(screen.getAllByText(/End/).length).toBe(1);
  });
});

it('The add button works', async () => {
  // render a blank component
  // click button twice and check if two eduitems appears
  render(<Education />);

  const addBtn = screen.getByText(/Add/);
  fireEvent.click(addBtn);
  fireEvent.click(addBtn);
  expect(screen.getAllByText(/End/).length).toBe(2);
});
