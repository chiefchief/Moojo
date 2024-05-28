import moment from 'moment';
import React, {memo} from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import {AvailableBLockTestIDs} from './types';
import {styles} from './styles';

type AvailableBlockProps = {
  expirationDate: string;
  style?: StyleProp<TextStyle>;
};

export const AvailableBlock = memo<AvailableBlockProps>(({expirationDate, style}) => {
  const expirationTitle = moment(expirationDate).format('DD MMM YYYY');
  return (
    <Text style={style} testID={AvailableBLockTestIDs.outerTextID}>
      {'Available until: '}
      <Text style={styles.date} testID={AvailableBLockTestIDs.innerTextID}>
        {expirationTitle}
      </Text>
    </Text>
  );
});
