import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Navigation from 'navigation';
import store, { persistor } from 'store';

import { colors, fonts } from 'theme';
import { ITheme } from 'theme/interfaces';
import { ThemeProvider } from 'theme/styled';
import { width, height } from 'constants/sizes';
import { AppContainer, AppStatusBar } from 'components';

// Упрощение, в корневом компоненте необходимо использовать очередь модальных окон
import Modal from 'features/SignUp/components/Modal';

const theme: ITheme = {
  colors,
  fonts,
  width,
  height,
};

export default () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={<AppContainer />} persistor={persistor}>
        <AppStatusBar />
        <Navigation />
        <Modal />
      </PersistGate>
    </Provider>
  </ThemeProvider>
);
