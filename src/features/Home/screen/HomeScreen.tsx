import React from 'react';
import { ScrollView, ViewStyle } from 'react-native';

import { colors } from 'theme';
import { DefaultContainer } from 'components';

import {
  Plan,
  Meetup,
  Header,
  Content,
  Banners,
  Progress,
} from '../components';

const containerStyle: ViewStyle = { backgroundColor: colors.primary };

export default () => (
  <DefaultContainer style={containerStyle}>
    <Header />
    <Content>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Banners />
        <Plan />
        <Meetup />
      </ScrollView>
      <Progress />
    </Content>
  </DefaultContainer>
);
