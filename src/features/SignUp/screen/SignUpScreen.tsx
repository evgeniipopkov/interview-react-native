import React from 'react';
import { ViewStyle } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { colors } from 'theme';
import { DefaultContainer } from 'components';
import { useFocusUpdateBarStyle } from 'customHooks';

import { Header, Form } from '../components';

const containerStyle: ViewStyle = { backgroundColor: colors.primary };

export default () => {
  useFocusUpdateBarStyle('light-content', useFocusEffect);

  return (
    <DefaultContainer style={containerStyle}>
      <Header />
      <Form />
    </DefaultContainer>
  );
};
