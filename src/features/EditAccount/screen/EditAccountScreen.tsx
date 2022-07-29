import React from 'react';
import { ViewStyle } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import config from 'constants/config';
import { DefaultLayout } from 'components';
import { useFocusUpdateBarStyle } from 'customHooks';
import { AccountStackList } from 'navigation/stacks/types';

import en from '../locales/en';

const headerStyle: ViewStyle = { marginTop: -12 };

export default ({ navigation }: NativeStackScreenProps<AccountStackList>) => {
  useFocusUpdateBarStyle('dark-content', useFocusEffect);

  return (
    <DefaultLayout
      header={en.header}
      styleHeader={config.IS_ANDROID ? undefined : headerStyle}
      onPressBack={navigation.goBack}
    />
  );
};
