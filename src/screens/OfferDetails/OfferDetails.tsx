import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {FC, useCallback, useEffect} from 'react';
import {RootStackParamList} from '../../_AppNavigator/types';
import {Screens} from '../Screens';
import {Image, ScrollView, Text, View} from 'react-native';
import {ClaimOfferButton} from './ClaimOfferButton/ClaimOfferButton';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useClaimTheOffer} from './hooks/useClaimTheOffer';
import {AvailableBlock} from '../../components/AvailableBlock/AvailableBlock';
import {useScreenOrientation} from '../../hooks/useScreenOrientation';
import {Close} from './Close/Close';
import {styles} from './styles';

const headerRight = () => <Close />;

export const OfferDetails: FC = () => {
  const {bottom, left, right} = useSafeAreaInsets();
  const {setOptions} = useNavigation();
  const {params} = useRoute<RouteProp<RootStackParamList, Screens.OfferDetails>>();
  const {item} = params;

  useEffect(() => {
    setOptions({headerRight});
  }, [setOptions]);

  const {claimTheOffer, isLoading} = useClaimTheOffer();
  const {isPortrait} = useScreenOrientation();

  const onPress = useCallback(() => {
    claimTheOffer(item.id, false);
  }, [claimTheOffer, item.id]);

  return (
    <View style={[styles.container, {paddingBottom: bottom || 16}]}>
      <ScrollView
        bounces={false}
        style={styles.container}
        contentContainerStyle={[styles.contentContainerStyle, {paddingLeft: left || 16, paddingRight: right || 16}]}>
        <View style={isPortrait ? styles.columnBlock : styles.rowBlow}>
          <View style={styles.container}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <View style={styles.block}>
              <AvailableBlock expirationDate={item.expirationDate} style={styles.available} />
              <Text style={styles.cashback}>{`${item.cashbackAmount} %`}</Text>
            </View>
            <Text style={styles.termsTitle}>{'Terms and Conditions:'}</Text>
            <Text>{item.termsAndConditions}</Text>
          </View>
          <Image
            source={{uri: item.retailerLogo}}
            style={[styles.image, isPortrait && styles.portraitImage]}
            resizeMode="cover"
          />
        </View>
      </ScrollView>
      <View style={{paddingLeft: left || 16, paddingRight: right || 16}}>
        <ClaimOfferButton isLoading={isLoading} onPress={onPress} />
      </View>
    </View>
  );
};
