import React from 'react';
import { useFocusEffect } from '@react-navigation/native';

import { DefaultLayout } from 'components';
import { useFocusUpdateBarStyle } from 'customHooks';

import en from '../locales/en';
import { Tiles, Courses } from '../components';

export default () => {
  useFocusUpdateBarStyle('dark-content', useFocusEffect);

  return (
    <DefaultLayout showAvatar header={en.header}>
      <Tiles />
      <Courses />
    </DefaultLayout>
  );
};
