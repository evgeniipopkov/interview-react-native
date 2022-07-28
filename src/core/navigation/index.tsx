import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';

import selectors from 'store/selectors';
import { AppContainer } from 'components';

import { AuthNavigator, NoAuthNavigator } from './navigators';

export default () => {
  const isRegistered = useSelector(selectors.user.isRegistered);

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <AppContainer>
        <NavigationContainer fallback={<AppContainer />}>
          {isRegistered ? <AuthNavigator /> : <NoAuthNavigator />}
        </NavigationContainer>
      </AppContainer>
    </SafeAreaProvider>
  );
};
