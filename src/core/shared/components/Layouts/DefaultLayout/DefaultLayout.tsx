import React from 'react';
import { Pressable, ViewStyle } from 'react-native';

import { ArrowBackIcon } from 'svgImages';
import AppStatusBar from '../../AppStatusBar';
import DefaultContainer from '../../Containers/DefaultContainer';

import { DefaultLayoutProps } from './interfaces';
import { HeaderWrapper, Header } from './DefaultLayout.styled';

const containerStyle: ViewStyle = { paddingHorizontal: 20 };

export default ({ children, header, onPressBack }: DefaultLayoutProps) => (
  <DefaultContainer style={containerStyle}>
    <AppStatusBar barStyle="dark-content" />
    <HeaderWrapper>
      {onPressBack && (
        <Pressable onPress={onPressBack}>
          <ArrowBackIcon />
        </Pressable>
      )}
      <Header offset={onPressBack ? 26 : 0}>{header}</Header>
    </HeaderWrapper>
    {children}
  </DefaultContainer>
);
