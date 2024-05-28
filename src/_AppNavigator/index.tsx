import React, {FC, useMemo} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {OfferDetails, OfferFeed} from '../screens';
import {Screens} from '../screens/Screens';
import {RootStackParamList} from './types';
import {useGetOffers} from '../hooks/useGetOffers';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator: FC = () => {
  const {getOffers} = useGetOffers();

  useMemo(() => {
    getOffers();
  }, [getOffers]);

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name={Screens.OfferFeed} component={OfferFeed} />
        <RootStack.Screen name={Screens.OfferDetails} component={OfferDetails} options={{presentation: 'modal'}} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
