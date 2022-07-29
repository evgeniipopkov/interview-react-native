import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import { DefaultLayout } from 'components';
import { useFocusUpdateBarStyle } from 'customHooks';

import en from '../locales/en';
import { Tiles, Search, Courses } from '../components';

export default () => {
  const [search, setSearch] = useState<string>('');

  useFocusUpdateBarStyle('dark-content', useFocusEffect);

  return (
    <DefaultLayout showAvatar header={en.header}>
      <Search search={search} setSearch={setSearch} />
      <Tiles />
      <Courses search={search} setSearch={setSearch} />
    </DefaultLayout>
  );
};
