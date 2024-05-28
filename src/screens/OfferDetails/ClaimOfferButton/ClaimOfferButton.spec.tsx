import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {ClaimOfferButton} from './ClaimOfferButton';
import {ClaimOfferButtonTestIDs} from './types';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = jest.fn();
  return Reanimated;
});

describe('ClaimOfferButton', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render loading indicator when isLoading is true', () => {
    const {getByTestId} = render(<ClaimOfferButton isLoading={true} />);

    expect(getByTestId(ClaimOfferButtonTestIDs.ActivityIndicator)).toBeTruthy();
  });

  it('should render button text when isLoading is false', () => {
    const {getByTestId} = render(<ClaimOfferButton isLoading={false} />);

    expect(getByTestId(ClaimOfferButtonTestIDs.ButtonTitle)).toBeTruthy();
  });

  it('should disable button when isLoading is true', () => {
    const {getByTestId} = render(<ClaimOfferButton isLoading={true} />);

    const button = getByTestId(ClaimOfferButtonTestIDs.Button);
    expect(button.props.accessibilityState.disabled).toBe(true);
  });

  it('should enable button and handle onPress event when isLoading is false', () => {
    const onPressMock = jest.fn();
    const {getByTestId} = render(<ClaimOfferButton isLoading={false} onPress={onPressMock} />);

    const button = getByTestId(ClaimOfferButtonTestIDs.Button);
    expect(button.props.accessibilityState.disabled).toBe(false);

    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalled();
  });
});
