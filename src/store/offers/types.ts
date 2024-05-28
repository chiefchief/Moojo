import {OfferItem} from '../../services/api/types';

export type OffersState = {
  offers: OfferItem[];
  isLoading: boolean;
  errorMessage: string;
};
