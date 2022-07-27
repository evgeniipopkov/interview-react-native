import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';

import { AppContainer } from 'components';
// import NoAuthNavigator from './navigators/NoAuthNavigator';
import AuthNavigator from './navigators/AuthNavigator';

export default () => (
  <SafeAreaProvider initialMetrics={initialWindowMetrics}>
    <AppContainer>
      <NavigationContainer fallback={<AppContainer />}>
        <AuthNavigator />
      </NavigationContainer>
    </AppContainer>
  </SafeAreaProvider>
);
