import React from 'react';

import { colors } from 'theme';

import {
  AccountIcon,
  CourseIcon,
  HomeIcon,
  SearchIcon,
  MessageIcon,
} from '../../../images';

import {
  Line,
  Label,
  Container,
  IconWrapper,
} from './TabBar.styled';

import en from '../../../locales/en';
import { TabBarProps } from './interfaces';

export default ({ state, navigation }: TabBarProps) => {
  const menu = [
    { label: en.home, Icon: HomeIcon },
    { label: en.course, Icon: CourseIcon },
    { label: en.search, Icon: SearchIcon },
    { label: en.message, Icon: MessageIcon },
    { label: en.account, Icon: AccountIcon },
  ];

  return (
    <Container>
      {state.routes.map((route, idx) => {
        const focused = state.index === idx;
        const { label, Icon } = menu[idx];
        return (
          <IconWrapper key={route.name} onPress={() => navigation.navigate(route.name)}>
            {focused && route.name !== 'SearchTab' && <Line />}
            <Icon
              opacityCircle={focused ? '1' : '0.05'}
              color={focused ? colors.primary : colors.text4}
              colorSearch={focused ? colors.white : colors.primary}
            />
            <Label focused={focused}>{label}</Label>
          </IconWrapper>
        );
      })}
    </Container>
  );
};
