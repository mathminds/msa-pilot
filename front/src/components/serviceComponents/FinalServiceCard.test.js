// FinalServiceCard.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FinalServiceCard from './FinalServiceCard';

describe('FinalServiceCard Component', () => {
  const handleOpenModal = jest.fn();
  const handleOpenRejectModal = jest.fn();
  const handleFlip = jest.fn();
  const thirdPartyRecipients = ['Recipient1', 'Recipient2'];
  const thirdPartySharedData = ['Data1', 'Data2'];

  beforeEach(() => {
    render(
      <FinalServiceCard
        handleOpenModal={handleOpenModal}
        handleOpenRejectModal={handleOpenRejectModal}
        handleFlip={handleFlip}
        thirdPartyRecipients={thirdPartyRecipients}
        thirdPartySharedData={thirdPartySharedData}
      />
    );
  });

  test('renders the component correctly', () => {
    expect(screen.getByText('정보전송자: 신한은행, 우리은행, 현대카드 등')).toBeInTheDocument();
    expect(screen.getByText('서비스 상세보기')).toBeInTheDocument();
    expect(screen.getByText('서비스 철회하기')).toBeInTheDocument();
    expect(screen.getByText('제3자 제공내역')).toBeInTheDocument();
  });

  test('calls handleOpenModal when "서비스 상세보기" is clicked', () => {
    fireEvent.click(screen.getByText('서비스 상세보기'));
    expect(handleOpenModal).toHaveBeenCalled();
  });

  test('calls handleOpenRejectModal when "서비스 철회하기" is clicked', () => {
    fireEvent.click(screen.getByText('서비스 철회하기'));
    expect(handleOpenRejectModal).toHaveBeenCalled();
  });

  test('calls handleFlip when "제3자 제공내역" is clicked', () => {
    fireEvent.click(screen.getByText('제3자 제공내역'));
    expect(handleFlip).toHaveBeenCalled();
  });

  test('renders third-party recipients and shared data correctly', () => {
    thirdPartyRecipients.forEach((recipient, index) => {
      expect(screen.getByText(recipient)).toBeInTheDocument();
      expect(screen.getByText(thirdPartySharedData[index])).toBeInTheDocument();
    });
  });
});