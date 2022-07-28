import React from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { ScrollView, ViewStyle } from 'react-native';

import { colors } from 'theme';
import { DefaultContainer } from 'components';
import { useFocusUpdateBarStyle } from 'customHooks';

import {
  Plan,
  Meetup,
  Header,
  Content,
  Banners,
  Progress,
} from '../components';

const containerStyle: ViewStyle = { backgroundColor: colors.primary };

export default () => {
  useFocusUpdateBarStyle('light-content', useFocusEffect);

  return (
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
};
