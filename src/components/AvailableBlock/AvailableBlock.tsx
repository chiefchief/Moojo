import moment from 'moment';
import React, {memo} from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';

type AvailableBlockProps = {
  expirationDate: string;
  style?: StyleProp<TextStyle>;
};

export const AvailableBlock = memo<AvailableBlockProps>(({expirationDate, style}) => {
  const expirationTitle = moment(expirationDate).format('DD MMM YYYY');
  return (
    <Text style={style}>
      {'Available until: '}
      <Text style={styles.date}>{expirationTitle}</Text>
    </Text>
  );
});

export const styles = StyleSheet.create({
  date: {
    fontWeight: 'bold',
  },
});
