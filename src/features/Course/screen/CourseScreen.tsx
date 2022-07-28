import React from 'react';
import { DefaultLayout } from 'components';

import en from '../locales/en';
import { Tiles, Courses } from '../components';

export default () => (
  <DefaultLayout showAvatar header={en.header}>
    <Tiles />
    <Courses />
  </DefaultLayout>
);
