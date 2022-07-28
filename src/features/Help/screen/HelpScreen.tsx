import React from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { DefaultLayout } from 'components';
import { useFocusUpdateBarStyle } from 'customHooks';
import { AccountStackList } from 'navigation/stacks/types';

import en from '../locales/en';

export default ({ navigation }: NativeStackScreenProps<AccountStackList>) => {
  useFocusUpdateBarStyle('dark-content', useFocusEffect);

  return <DefaultLayout header={en.header} onPressBack={navigation.goBack} />;
};
