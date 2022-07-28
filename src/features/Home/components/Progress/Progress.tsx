import React from 'react';
import { ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { colors } from 'theme';
import { randomInteger } from 'helpers/utils';

import en from '../../locales/en';

import {
  Fact,
  Plan,
  Header,
  Courses,
  Container,
  TimeWrapper,
  HeaderWrapper,
  ProgressWrapper,
} from './Progress.styled';

const PLAN = 60;

const gradientStyle: ViewStyle = {
  height: 6,
  position: 'absolute',
  borderTopLeftRadius: 22,
  borderBottomLeftRadius: 22,
};

export default () => {
  const fact = randomInteger(0, PLAN);
  const width = `${(fact * 100) / PLAN}%`;
  const radius = fact === PLAN ? 22 : 0;

  const extStyle: ViewStyle = {
    width,
    borderTopRightRadius: radius,
    borderBottomRightRadius: radius,
  };

  return (
    <Container>
      <HeaderWrapper>
        <Header>{en.learnedToday}</Header>
        <Courses>{en.myCourses}</Courses>
      </HeaderWrapper>
      <TimeWrapper>
        <Fact>{`${fact}${en.min}`}</Fact>
        <Plan>{` / ${PLAN}${en.min}`}</Plan>
      </TimeWrapper>
      <ProgressWrapper>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[gradientStyle, extStyle]}
          colors={[colors.text4, colors.orange]}
        />
      </ProgressWrapper>
    </Container>
  );
};
