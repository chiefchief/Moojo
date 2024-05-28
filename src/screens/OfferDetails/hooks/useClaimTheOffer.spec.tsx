import {renderHook, act} from '@testing-library/react-hooks';
import {Alert} from 'react-native';
import {useClaimTheOffer} from './useClaimTheOffer';
import {offersService} from '../../../services/api/offers';

jest.mock('react-native', () => ({
  Alert: {
    alert: jest.fn(),
  },
}));

jest.mock('../../../services/api/offers', () => ({
  offersService: {
    claimTheOffer: jest.fn(),
  },
}));

describe('useClaimTheOffer', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should show confirmation alert when claimTheOffer is called', () => {
    const {result} = renderHook(() => useClaimTheOffer());

    act(() => {
      result.current.claimTheOffer(1, true, 2000);
    });

    expect(Alert.alert).toHaveBeenCalledWith('Are you sure you want to claim this offer?', '', [
      {style: 'cancel', text: 'Cancel'},
      {
        style: 'default',
        isPreferred: true,
        text: 'Yes, Claim It',
        onPress: expect.any(Function),
      },
    ]);
  });

  it('should call offersService.claimTheOffer and show success alert on success', async () => {
    offersService.claimTheOffer.mockResolvedValueOnce({success: true});
    const {result} = renderHook(() => useClaimTheOffer());

    let resolveClaim: Function;
    act(() => {
      result.current.claimTheOffer(1, true, 2000);
      const alertCall = Alert.alert.mock.calls[0][2];
      resolveClaim = alertCall[1].onPress;
    });

    await act(async () => {
      await resolveClaim();
    });

    expect(result.current.isLoading).toBe(false);
    expect(offersService.claimTheOffer).toHaveBeenCalledWith(1, true, 2000);
    expect(Alert.alert).toHaveBeenCalledWith('Wow!', 'Offer successfully claimed!', [{style: 'default', text: 'Ok'}]);
  });

  it('should call offersService.claimTheOffer and show error alert on failure', async () => {
    offersService.claimTheOffer.mockRejectedValueOnce('Something went wrong...');
    const {result} = renderHook(() => useClaimTheOffer());

    let resolveClaim: Function;
    act(() => {
      result.current.claimTheOffer(1, false, 2000);
      const alertCall = Alert.alert.mock.calls[0][2];
      resolveClaim = alertCall[1].onPress;
    });

    await act(async () => {
      await resolveClaim();
    });

    expect(result.current.isLoading).toBe(false);
    expect(offersService.claimTheOffer).toHaveBeenCalledWith(1, false, 2000);
    expect(Alert.alert).toHaveBeenCalledWith('Oops...', 'Something went wrong...', [{style: 'default', text: 'Ok'}]);
  });

  it('should call offersService.claimTheOffer with three params when passed only id', async () => {
    offersService.claimTheOffer.mockRejectedValueOnce('Something went wrong...');
    const {result} = renderHook(() => useClaimTheOffer());

    let resolveClaim: Function;
    act(() => {
      result.current.claimTheOffer(1);
      const alertCall = Alert.alert.mock.calls[0][2];
      resolveClaim = alertCall[1].onPress;
    });

    await act(async () => {
      await resolveClaim();
    });

    expect(result.current.isLoading).toBe(false);
    expect(offersService.claimTheOffer).toHaveBeenCalledWith(1, true, 2000);
    expect(Alert.alert).toHaveBeenCalledWith('Oops...', 'Something went wrong...', [{style: 'default', text: 'Ok'}]);
  });
});
