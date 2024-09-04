
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import dataProviderComponents from './dataProviderComponents';

describe('dataProviderComponents', () => {
  const handleEvent = jest.fn();

  beforeEach(() => {
    render(<dataProviderComponents onEvent={handleEvent} />);
  });

  test('renders the component correctly', () => {
    // Add
    expect(screen.getByText('정보전송자: 신한은행, 우리은행, 현대카드 등')).toBeInTheDocument();
    expect(screen.getByText('서비스 상세보기')).toBeInTheDocument();
    expect(screen.getByText('서비스 철회하기')).toBeInTheDocument();
    expect(screen.getByText('제3자 제공내역')).toBeInTheDocument();
  
  });

  test('calls onEvent when event is triggered', () => {
    // Simulate event and add
    fireEvent.click(screen.getByText('서비스 상세보기'));
    expect(handleEvent).toHaveBeenCalled();
    fireEvent.click(screen.getByText('서비스 철회하기'));
    expect(handleEvent).toHaveBeenCalled();
    fireEvent.click(screen.getByText('제3자 제공내역'));
    expect(handleEvent).toHaveBeenCalled();
  });
});
