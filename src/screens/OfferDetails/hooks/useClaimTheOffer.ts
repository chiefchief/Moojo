import {useCallback, useState} from 'react';
import {offersService} from '../../../services/api/offers';
import {Alert} from 'react-native';

export const useClaimTheOffer = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleError = (message: string) => Alert.alert('Oops...', message, [{style: 'default', text: 'Ok'}]);
  const handleSuccess = () => Alert.alert('Wow!', 'Offer successfully claimed!', [{style: 'default', text: 'Ok'}]);

  const claim = useCallback(async (id: number, isResolve: boolean, duration: number) => {
    setIsLoading(true);
    try {
      await offersService.claimTheOffer(id, isResolve, duration);
      handleSuccess();
    } catch (error) {
      handleError(error as string);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const claimTheOffer = useCallback(
    (id: number, isResolve: boolean = true, duration: number = 2000) => {
      Alert.alert('Are you sure you want to claim this offer?', '', [
        {style: 'cancel', text: 'Cancel'},
        {style: 'default', isPreferred: true, text: 'Yes, Claim It', onPress: () => claim(id, isResolve, duration)},
      ]);
    },
    [claim],
  );

  return {isLoading, claimTheOffer};
};
