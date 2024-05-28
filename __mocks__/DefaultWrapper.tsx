import React, {FC, PropsWithChildren} from 'react';
import {View} from 'react-native';
import {RecoilRoot} from 'recoil';

export const DefaultWrapper: FC<PropsWithChildren> = ({children}) => (
  <RecoilRoot>
    <View>{children}</View>
  </RecoilRoot>
);
