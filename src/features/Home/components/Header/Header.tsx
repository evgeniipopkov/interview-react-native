import React from 'react';
import { View } from 'react-native';

import { SmallAvatar } from 'svgImages';

import en from '../../locales/en';
import { Container, Header, Description } from './Header.styled';

export default () => (
  <Container>
    <View>
      <Header>{`${en.hi}, ${en.mockName}`}</Header>
      <Description>{en.start}</Description>
    </View>
    <SmallAvatar />
  </Container>
);
