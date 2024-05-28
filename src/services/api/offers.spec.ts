import {offersService} from './offers';
import {mockOffers} from './mockOffers';

jest.useFakeTimers();

describe('offersService', () => {
  afterEach(() => {
    jest.clearAllTimers();
  });

  describe('getOffers', () => {
    it('should resolve with offers when isResolve is true', async () => {
      const promise = offersService.getOffers(true, 2000);
      jest.advanceTimersByTime(2000);

      await expect(promise).resolves.toEqual({success: true, offers: mockOffers.offers});
    });

    it('should reject with an error message when isResolve is false', async () => {
      const promise = offersService.getOffers(false, 2000);
      jest.advanceTimersByTime(2000);

      await expect(promise).rejects.toBe('Something went wrong...');
    });
  });

  describe('claimTheOffer', () => {
    it('should resolve with success when isResolve is true', async () => {
      const promise = offersService.claimTheOffer(1, true, 2000);
      jest.advanceTimersByTime(2000);

      await expect(promise).resolves.toEqual({success: true});
    });

    it('should reject with an error message when isResolve is false', async () => {
      const promise = offersService.claimTheOffer(1, false, 2000);
      jest.advanceTimersByTime(2000);

      await expect(promise).rejects.toBe('Something went wrong...');
    });
  });
});
