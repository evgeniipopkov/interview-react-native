import React from 'react';
import { ViewStyle } from 'react-native';

import { colors } from 'theme';
import { AppStatusBar, DefaultContainer } from 'components';

import { Header, Form } from '../components';

const containerStyle: ViewStyle = { backgroundColor: colors.primary };

export default () => (
  <DefaultContainer style={containerStyle}>
    <AppStatusBar barStyle="light-content" />
    <Header />
    <Form />
  </DefaultContainer>
);
