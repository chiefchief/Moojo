import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {OfferFeedItem} from './OfferFeedItem';
import {OfferItem} from '../../../services/api/types';
import * as Navigator from '@react-navigation/native';
import {Screens} from '../../Screens';
import {OfferFeedItemTestIDs} from './types';

const mockItem: OfferItem = {
  id: 1,
  title: 'Test Offer',
  description: 'Test Description',
  cashbackAmount: 10,
  expirationDate: '12.12.2000',
  retailerLogo: '',
  termsAndConditions: '',
};

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('OfferFeedItem', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('calls navigate with correct screen and item when pressed', () => {
    const mockNavigate = jest.fn();
    jest.spyOn(Navigator, 'useNavigation').mockReturnValue({navigate: mockNavigate});

    const {getByTestId} = render(<OfferFeedItem item={mockItem} index={0} />);
    const closeButton = getByTestId(OfferFeedItemTestIDs.Button);
    fireEvent.press(closeButton);

    expect(mockNavigate).toHaveBeenCalledWith(Screens.OfferDetails, {item: mockItem});
  });
});
