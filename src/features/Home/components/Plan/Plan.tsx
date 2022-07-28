/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { ViewStyle } from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts';
import { Defs, LinearGradient, Stop } from 'react-native-svg';

import { colors } from 'theme';
import randomInteger from 'helpers/utils';

import en from '../../locales/en';

import {
  Fact,
  Plan,
  Label,
  Header,
  Container,
  FactWrapper,
  ChartWrapper,
  DetailsWrapper,
  DetailsContainer,
} from './Plan.styled';

const PLAN_PRODUCT = 24;
const PLAN_PACKAGING = 48;

const circleStyle: ViewStyle = { height: 22, width: 22 };

const Gradient = () => (
  <Defs key="gradient">
    <LinearGradient id="gradient" x1="0%" x2="0%" y2="100%">
      <Stop offset="0%" stopColor={colors.lightOrange} />
      <Stop offset="50%" stopColor={colors.orange} />
      <Stop offset="100%" stopColor={colors.lightOrange} />
    </LinearGradient>
  </Defs>
);

export default () => {
  const factProduct = randomInteger(0, PLAN_PRODUCT);
  const factPackaging = randomInteger(0, PLAN_PACKAGING);

  const data = [
    { label: en.packagingDesign, fact: factPackaging, plan: PLAN_PACKAGING },
    { label: en.productDesign, fact: factProduct, plan: PLAN_PRODUCT },
  ];

  return (
    <Container>
      <Header>{en.learningPlan}</Header>
      <DetailsContainer>
        {data.map(({ label, fact, plan }) => (
          <DetailsWrapper key={label}>
            <ChartWrapper>
              {/* @ts-ignore */}
              <ProgressCircle
                strokeWidth={3}
                style={circleStyle}
                progress={fact / plan}
                progressColor="url(#gradient)"
                backgroundColor={colors.text4}
                svg={{ strokeWidth: 3, fill: 'url(#gradient)' }}
              >
                <Gradient />
              </ProgressCircle>
              <Label>{label}</Label>
            </ChartWrapper>
            <FactWrapper>
              <Fact>{fact}</Fact>
              <Plan>{`/${plan}`}</Plan>
            </FactWrapper>
          </DetailsWrapper>
        ))}
      </DetailsContainer>
    </Container>
  );
};
