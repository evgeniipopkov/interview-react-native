import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  HomeScreen,
  CourseScreen,
  SearchScreen,
  MessageScreen,
} from 'screens';

import TabBar from './TabBar';
import { IState } from './interfaces';
import { AccountStack } from '../../stacks';
import { BottomTabNavigationType, TabBarNameType } from './types';

const tabBar = (
  state: IState<TabBarNameType>,
  navigation: BottomTabNavigationType,
) => (
  <TabBar state={state} navigation={navigation} />
);

const Tab = createBottomTabNavigator();

const tabs = [
  { name: 'HomeTab', component: HomeScreen },
  { name: 'CourseTab', component: CourseScreen },
  { name: 'SearchTab', component: SearchScreen },
  { name: 'MessageTab', component: MessageScreen },
  { name: 'AccountTab', component: AccountStack },
];

export default () => (
  <Tab.Navigator
    initialRouteName="HomeTab"
    backBehavior="history"
    screenOptions={{ headerShown: false }}
    tabBar={({ state, navigation }) => tabBar(
      state as IState<TabBarNameType>,
      navigation as unknown as BottomTabNavigationType,
    )}
  >
    {tabs.map(({ name, component }) => (
      <Tab.Screen
        key={name}
        name={name}
        component={component}
      />
    ))}
  </Tab.Navigator>
);
