import React from 'react';

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
    <Navigation />
  </ThemeProvider>
);
