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
      tasks: {
        task1: 'Cry a lot',
        itemizedItem2: 'Take a dive',
      },
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
    expect(screen.getAllByText(/Basket/).length).toBeGreaterThan(0);
    expect(screen.getByText(/1818/)).toBeInTheDocument();
  });

  it('onDelete is called', () => {
    const deleteButtons = screen.getAllByText(/Delete/);
    fireEvent.click(deleteButtons[deleteButtons.length - 1]);
    expect(mockOnDelete.mock.calls.length).toBe(1);
  });
});

describe('Editable WorkItem', () => {
  const mockOnDelete = jest.fn(() => {});

  beforeEach(() => {
    const content = {
      company: 'Laughter House',
      position: 'Junior Underwater Basket Weaver',
      startYear: '1816',
      endYear: '1818',
      tasks: {
        task1: 'Cry a lot',
        itemizedItem2: 'Take a dive',
      },
    };
    render(<WorkItem content={content} onDelete={mockOnDelete} editable />);
  });

  it('add task is rendered', () => {
    expect(screen.getByText(/Add/)).toBeInTheDocument();
  });

  it('submit a new task', () => {
    // put value in textbox, add is associated with the 4th box
    const textbox = screen.getAllByRole('textbox')[4];
    fireEvent.change(textbox, { target: { value: 'Weaving' } });
    // textbox should contain the new text
    expect(textbox.value).toMatch(/Weaving/);
    const addBtn = screen.getByText(/Submit Task/);
    fireEvent.click(addBtn);
    // textbox should be empty
    expect(textbox.value).toEqual('');
    // a new task should be rendered
    expect(screen.getByText(/Weaving/)).toBeInTheDocument();
  });

  it('delete a task', () => {
    fireEvent.click(screen.getAllByText(/Delete Task/)[0]);
    expect(screen.getAllByText(/Delete Task/).length).toBe(1);
  });
});
