import {useCallback} from 'react';
import {useSetRecoilState} from 'recoil';
import {offersState} from '../store';
import {offersService} from '../services/api/offers';

export const useGetOffers = () => {
  const setOffers = useSetRecoilState(offersState);

  const getOffers = useCallback(
    async (isResolve: boolean = true, duration: number = 2000) => {
      try {
        setOffers(prevState => ({...prevState, isLoading: true, errorMessage: ''}));
        const {offers} = await offersService.getOffers(isResolve, duration);
        setOffers(prevState => ({...prevState, isLoading: false, offers}));
      } catch (error) {
        setOffers(prevState => ({...prevState, isLoading: false, errorMessage: error as string}));
      }
    },
    [setOffers],
  );

  return {getOffers};
};
