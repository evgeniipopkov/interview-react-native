import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { DefaultLayout } from 'components';
import { AccountStackList } from 'navigation/stacks/types';

import en from '../locales/en';

export default ({ navigation }: NativeStackScreenProps<AccountStackList>) => (
  <DefaultLayout header={en.header} onPressBack={navigation.goBack}>
    {null}
  </DefaultLayout>
);
