
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FilterSelector from './FilterSelector';

describe('FilterSelector', () => {
  const handleEvent = jest.fn();

  beforeEach(() => {
    render(<FilterSelector onEvent={handleEvent} />);
  });

  test('renders the component correctly', () => {
    // Add your assertions here
  });

  test('calls onEvent when event is triggered', () => {
    // Simulate event and add your assertions here
  });
});
