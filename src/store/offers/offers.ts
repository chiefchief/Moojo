import {atom, selector} from 'recoil';
import {OffersState} from './types';

export const offersState = atom<OffersState>({
  key: 'offersState',
  default: {
    offers: [],
    isLoading: false,
    errorMessage: '',
  },
});

export const offersError = selector({
  key: 'FilteredTodoList',
  get: ({get}) => {
    const {errorMessage} = get(offersState);

    return errorMessage;
  },
});
