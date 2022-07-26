import React from 'react';
import { colors, fonts } from 'theme';
import { ThemeProvider } from 'theme/styled';

export default () => (
  <ThemeProvider theme={{ colors, fonts }}>
    {null}
  </ThemeProvider>
);
