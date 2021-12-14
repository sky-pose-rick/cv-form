import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EduItem from './EduItem';

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

    render(<EduItem content={content} />);
  });

  it('Education renders', () => {
    expect(screen.getAllByText(/./)[0]).toBeInTheDocument();
  });
});
