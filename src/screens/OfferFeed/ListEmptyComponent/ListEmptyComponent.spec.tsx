import React from 'react';
import {render} from '@testing-library/react-native';
import {ListEmptyComponent} from './ListEmptyComponent';
import {ListEmptyComponentTestIDs} from './types';

describe('ListEmptyComponent', () => {
  it('renders loading indicator when isLoading is true', () => {
    const {getByTestId} = render(<ListEmptyComponent isLoading={true} errorMessage="" />);
    expect(getByTestId(ListEmptyComponentTestIDs.ActivityIndicator)).toBeTruthy();
  });

  it('renders error message when isLoading is false and errorMessage is provided', () => {
    const errorMessage = 'Custom error message';
    const {getByTestId} = render(<ListEmptyComponent isLoading={false} errorMessage={errorMessage} />);
    expect(getByTestId(ListEmptyComponentTestIDs.Text)).toHaveTextContent(errorMessage); // Use test IDs
  });

  it('renders default text when isLoading is false and errorMessage is not provided', () => {
    const {getByTestId} = render(<ListEmptyComponent isLoading={false} errorMessage="" />);
    expect(getByTestId(ListEmptyComponentTestIDs.Text)).toHaveTextContent('No available data'); // Use test IDs
  });
});
