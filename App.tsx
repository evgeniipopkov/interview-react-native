import React from 'react';
import { StatusBar } from 'react-native';

import Navigation from 'navigation';
import { colors, fonts } from 'theme';
import { ITheme } from 'theme/interfaces';
import { ThemeProvider } from 'theme/styled';
import { width, height } from 'constants/sizes';

const theme: ITheme = {
  colors,
  fonts,
  width,
  height,
};

export default () => (
  <ThemeProvider theme={theme}>
    <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
    <Navigation />
  </ThemeProvider>
);
