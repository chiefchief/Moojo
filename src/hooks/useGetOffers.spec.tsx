import {act, renderHook} from '@testing-library/react-hooks';
import {RecoilRoot} from 'recoil';
import {useGetOffers} from './useGetOffers';
import React, {ReactNode} from 'react';
import {offersService} from '../services/api/offers';

const wrapper = ({children}: {children?: ReactNode | undefined}) => <RecoilRoot>{children}</RecoilRoot>;

describe('useGetOffers', () => {
  it('should set offers and isLoading to true when getOffers is called', async () => {
    const getOffersSpy = jest.spyOn(offersService, 'getOffers');
    const {result} = renderHook(() => useGetOffers(), {wrapper});
    const {getOffers} = result.current;

    await act(async () => {
      await getOffers();
    });

    expect(getOffersSpy).toHaveBeenCalledWith(true, 2000);
  });

  it('should be called with params', async () => {
    const getOffersSpy = jest.spyOn(offersService, 'getOffers');

    const {result} = renderHook(() => useGetOffers(), {wrapper});
    const {getOffers} = result.current;

    await act(async () => {
      await getOffers(false, 3000);
    });
    expect(getOffersSpy).toHaveBeenCalledWith(false, 3000);
  });
});
