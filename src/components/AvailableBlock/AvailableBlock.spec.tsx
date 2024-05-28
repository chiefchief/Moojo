import React from 'react';
import {render} from '@testing-library/react-native';
import moment from 'moment';
import {AvailableBlock} from './AvailableBlock';
import {AvailableBLockTestIDs} from './types';

describe('AvailableBlock', () => {
  it('should render correctly with the given expiration date', () => {
    const expirationDate = '2024-12-31';
    const formattedDate = moment(expirationDate).format('DD MMM YYYY');

    const {getByTestId} = render(<AvailableBlock expirationDate={expirationDate} />);

    const outerText = getByTestId(AvailableBLockTestIDs.outerTextID);
    const innerText = getByTestId(AvailableBLockTestIDs.innerTextID);

    expect(outerText).toBeTruthy();
    expect(innerText).toBeTruthy();
    expect(outerText.children.join('')).toContain('Available until: ');
    expect(innerText.children.join('')).toBe(formattedDate);
  });

  it('should apply custom style correctly', () => {
    const expirationDate = '2024-12-31';
    const customStyle = {color: 'red'};

    const {getByTestId} = render(<AvailableBlock expirationDate={expirationDate} style={customStyle} />);

    const outerText = getByTestId(AvailableBLockTestIDs.outerTextID);
    expect(outerText.props.style.color).toEqual(customStyle.color);
  });
});
