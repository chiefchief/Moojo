import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Close} from './Close';
import {CloseTestIDs} from './types';
import * as Navigator from '@react-navigation/native';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('Close', () => {
  it('should call goBack function on press', () => {
    const mockGoBack = jest.fn();

    jest.spyOn(Navigator, 'useNavigation').mockReturnValue({goBack: mockGoBack});

    const {getByTestId} = render(<Close />);
    const closeButton = getByTestId(CloseTestIDs.Button);
    fireEvent.press(closeButton);

    expect(mockGoBack).toHaveBeenCalled();
  });
});
