import React, {memo} from 'react';
import {Pressable, Text} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {CloseTestIDs} from './types';

export const Close = memo(() => {
  const {goBack} = useNavigation();

  return (
    <Pressable style={styles.container} onPress={goBack} testID={CloseTestIDs.Button}>
      <Text style={styles.plus}>{'╳'}</Text>
    </Pressable>
  );
});
