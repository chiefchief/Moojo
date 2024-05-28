import React, {memo} from 'react';
import {Pressable, Text} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

export const Close = memo(() => {
  const {goBack} = useNavigation();

  return (
    <Pressable style={styles.container} onPress={goBack}>
      <Text style={styles.plus}>{'╳'}</Text>
    </Pressable>
  );
});
