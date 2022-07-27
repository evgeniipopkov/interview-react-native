import React from 'react';
import { DefaultLayout } from 'components';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AccountStackList } from 'navigation/stacks/types';
import en from '../locales/en';
import { Avatar, Sections } from '../components';

export default ({ navigation }: NativeStackScreenProps<AccountStackList>) => {
  const { navigate } = navigation;

  const sections = [
    { label: en.favorite, onPress: () => navigate('FavoriteScreen') },
    { label: en.editAccount, onPress: () => navigate('EditAccountScreen') },
    { label: en.settings, onPress: () => navigate('SettingsScreen') },
    { label: en.help, onPress: () => navigate('HelpScreen') },
  ];

  return (
    <DefaultLayout header={en.header}>
      <Avatar />
      <Sections data={sections} />
    </DefaultLayout>
  );
};
