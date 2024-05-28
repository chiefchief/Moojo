import React, {memo} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {styles} from './styles';
import {ListEmptyComponentTestIDs} from './types';

type ListEmptyComponentProps = {
  errorMessage: string;
  isLoading: boolean;
};

const defaultText = 'No available data';

export const ListEmptyComponent = memo<ListEmptyComponentProps>(({errorMessage, isLoading}) => {
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={'large'} testID={ListEmptyComponentTestIDs.ActivityIndicator} />
      ) : (
        <Text style={styles.errorText} testID={ListEmptyComponentTestIDs.Text}>
          {errorMessage || defaultText}
        </Text>
      )}
    </View>
  );
});
