import React, {memo} from 'react';
import {OfferItem} from '../../../services/api/types';
import {Pressable, Text, View} from 'react-native';
import Animated, {FadeInRight} from 'react-native-reanimated';
import {styles} from './styles';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../_AppNavigator/types';
import {Screens} from '../../Screens';
import {AvailableBlock} from '../../../components/AvailableBlock/AvailableBlock';
import {OfferFeedItemTestIDs} from './types';

type OfferFeedItemProps = {
  item: OfferItem;
  index: number;
};

export const OfferFeedItem = memo<OfferFeedItemProps>(({item, index}) => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();
  const onPressItem = () => navigate(Screens.OfferDetails, {item});

  return (
    <Animated.View entering={FadeInRight.delay(index * 50)} style={styles.container}>
      <Pressable onPress={onPressItem} testID={OfferFeedItemTestIDs.Button}>
        <View style={styles.topBlock}>
          <View style={styles.titleBlock}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
          <View style={styles.cashbackBlock}>
            <Text style={styles.cashback}>{`${item.cashbackAmount} %`}</Text>
          </View>
        </View>

        <AvailableBlock expirationDate={item.expirationDate} style={styles.dateTitle} />
      </Pressable>
    </Animated.View>
  );
});
