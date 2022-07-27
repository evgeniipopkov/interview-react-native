import React from 'react';
import { StatusBar } from 'react-native';

import { AppStatusBarProps } from './interfaces';

export default ({ barStyle }: AppStatusBarProps) => (
  <StatusBar
    translucent
    barStyle={barStyle}
    backgroundColor="transparent"
  />
);
