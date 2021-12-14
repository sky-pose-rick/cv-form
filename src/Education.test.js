import React from 'react';
import {
  fireEvent, render, screen, waitFor,
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

    render(<Education content={content} />);
  });

  it('Education renders', () => {
    expect(screen.getAllByText(/./)[0]).toBeInTheDocument();
  });

  it('Renders two items', () => {
    expect(screen.getAllByText(/End/).length).toBe(2);
  });
});

it('The add button works', async () => {
  // render a blank component
  // click add twice
  // check if two eduItems appear
  render(<Education />);

  const addBtn = screen.getByText(/Add/);
  fireEvent.click(addBtn);
  expect(screen.getByText(/End/)).toBeInTheDocument();
});
