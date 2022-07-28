import React from 'react';
import { StackAnimationTypes } from 'react-native-screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StackType, StackProps } from './interfaces';

const createStack = <T extends StackType>(
  animation: StackAnimationTypes,
  screens: StackProps<T>[],
) => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation }}>
      {screens.map(({ name, component, presentation }) => (
        <Stack.Screen
          key={name as string}
          name={name as string}
          component={component}
          options={{ presentation }}
        />
      ))}
    </Stack.Navigator>
  );
};

export default createStack;
