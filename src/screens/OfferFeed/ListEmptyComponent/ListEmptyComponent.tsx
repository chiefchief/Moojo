import React, {memo} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {styles} from './styles';

type ListEmptyComponentProps = {
  errorMessage: string;
  isLoading: boolean;
};

const defaultText = 'No available data';

export const ListEmptyComponent = memo<ListEmptyComponentProps>(({errorMessage, isLoading}) => {
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <Text style={styles.errorText}>{errorMessage || defaultText}</Text>
      )}
    </View>
  );
});
