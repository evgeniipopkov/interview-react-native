import React from 'react';
import { useFocusEffect } from '@react-navigation/native';

import { DefaultLayout } from 'components';
import { useFocusUpdateBarStyle } from 'customHooks';

import en from '../locales/en';

export default () => {
  useFocusUpdateBarStyle('dark-content', useFocusEffect);

  return <DefaultLayout header={en.header} />;
};
