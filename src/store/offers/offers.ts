import {atom} from 'recoil';
import {OffersState} from './types';

export const offersState = atom<OffersState>({
  key: 'offersState',
  default: {
    offers: [],
    isLoading: false,
    errorMessage: '',
  },
});
