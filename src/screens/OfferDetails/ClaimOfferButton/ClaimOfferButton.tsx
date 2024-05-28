import React, {memo} from 'react';
import {ActivityIndicator, GestureResponderEvent, Pressable, StyleSheet} from 'react-native';
import Animated, {FadeInUp, FadeOutDown} from 'react-native-reanimated';

type ClaimOfferButtonProps = {
  isLoading: boolean;
  onPress?: (event: GestureResponderEvent) => void;
};

export const ClaimOfferButton = memo<ClaimOfferButtonProps>(({isLoading, onPress}) => {
  return (
    <Pressable disabled={isLoading} style={[styles.container, isLoading && styles.disabled]} onPress={onPress}>
      {isLoading ? (
        <Animated.View entering={FadeInUp} exiting={FadeOutDown}>
          <ActivityIndicator color={'white'} />
        </Animated.View>
      ) : (
        <Animated.Text style={styles.title} entering={FadeInUp} exiting={FadeOutDown}>
          {'Claim the Offer'}
        </Animated.Text>
      )}
    </Pressable>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#007bff',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    marginTop: 16,
  },
  disabled: {
    backgroundColor: '#80bdff',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
