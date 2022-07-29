import React from 'react';
import { Pressable, ViewStyle } from 'react-native';

import { ArrowBackIcon, SmallAvatar } from 'svgImages';
import DefaultContainer from '../../Containers/DefaultContainer';

import { DefaultLayoutProps } from './interfaces';
import { HeaderContainer, HeaderWrapper, Header } from './DefaultLayout.styled';

const containerStyle: ViewStyle = { paddingHorizontal: 20 };

export default ({
  children, header, showAvatar, styleHeader, onPressBack,
}: DefaultLayoutProps) => (
  <DefaultContainer style={containerStyle}>
    <HeaderContainer style={styleHeader}>
      <HeaderWrapper>
        {onPressBack && (
          <Pressable onPress={onPressBack}>
            <ArrowBackIcon />
          </Pressable>
        )}
        <Header offset={onPressBack ? 26 : 0}>{header}</Header>
      </HeaderWrapper>
      {showAvatar && <SmallAvatar />}
    </HeaderContainer>
    {children}
  </DefaultContainer>
);
