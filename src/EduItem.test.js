import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EduItem from './EduItem';

it('General renders', () => {
  render(<EduItem content={null} />);
  expect(screen.getByText(/./)).toBeInTheDocument();
});
