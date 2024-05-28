import React from 'react';
import type {FC} from 'react';
import {AppNavigator} from './_AppNavigator';
import {RecoilRoot} from 'recoil';

export const App: FC = () => {
  return (
    <RecoilRoot>
      <AppNavigator />
    </RecoilRoot>
  );
};
