import {mockOffers} from './mockOffers';
import {OffersResponse, SuccessResponse} from './types';

export const offersService = {
  getOffers: (isResolve: boolean, duration: number): Promise<OffersResponse> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isResolve) {
          resolve({success: true, offers: mockOffers.offers});
        }
        reject('Something went wrong...');
      }, duration);
    });
  },
  claimTheOffer: (id: number, isResolve: boolean, duration: number): Promise<SuccessResponse> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isResolve) {
          resolve({success: true});
        }
        reject('Something went wrong...');
      }, duration);
    });
  },
};
