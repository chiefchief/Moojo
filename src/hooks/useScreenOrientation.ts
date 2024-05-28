import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';

export const useScreenOrientation = () => {
  const [isPortrait, setIsPortrait] = useState(true);

  useEffect(() => {
    const {remove} = Dimensions.addEventListener('change', ({window: {width, height}}) => {
      if (width < height) {
        setIsPortrait(true);
      } else {
        setIsPortrait(false);
      }
    });
    return () => {
      remove();
    };
  }, []);

  return {isPortrait};
};
