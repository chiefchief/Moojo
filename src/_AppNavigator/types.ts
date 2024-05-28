import {Screens} from '../screens/Screens';
import {OfferItem} from '../services/api/types';

export type RootStackParamList = {
  [Screens.OfferFeed]: undefined;
  [Screens.OfferDetails]: {item: OfferItem};
};
