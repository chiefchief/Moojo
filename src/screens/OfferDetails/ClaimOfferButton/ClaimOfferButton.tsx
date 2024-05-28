import React, {memo} from 'react';
import {ActivityIndicator, GestureResponderEvent, Pressable} from 'react-native';
import Animated, {FadeInUp, FadeOutDown} from 'react-native-reanimated';
import {styles} from './styles';
import {ClaimOfferButtonTestIDs} from './types';

type ClaimOfferButtonProps = {
  isLoading: boolean;
  onPress?: (event: GestureResponderEvent) => void;
};

export const ClaimOfferButton = memo<ClaimOfferButtonProps>(({isLoading, onPress}) => {
  return (
    <Pressable
      disabled={isLoading}
      style={[styles.container, isLoading && styles.disabled]}
      onPress={onPress}
      testID={ClaimOfferButtonTestIDs.Button}>
      {isLoading ? (
        <Animated.View entering={FadeInUp} exiting={FadeOutDown}>
          <ActivityIndicator color={'white'} testID={ClaimOfferButtonTestIDs.ActivityIndicator} />
        </Animated.View>
      ) : (
        <Animated.Text
          style={styles.title}
          entering={FadeInUp}
          exiting={FadeOutDown}
          testID={ClaimOfferButtonTestIDs.ButtonTitle}>
          {'Claim the Offer'}
        </Animated.Text>
      )}
    </Pressable>
  );
});
