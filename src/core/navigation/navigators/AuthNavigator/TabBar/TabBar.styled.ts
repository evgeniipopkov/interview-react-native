import styled, { css } from 'theme/styled';
import { TabBarSCProps } from './interfaces';

const Container = styled.View`
  flex-direction: row;
  align-items: flex-end;
  padding: 10px 15px 10px;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.white};
`;

const IconWrapper = styled.Pressable`
  align-items: center;
  justify-content: center;
`;

const Line = styled.View`
  width: 26px;
  height: 2px;
  margin-bottom: 16px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const Label = styled.Text<TabBarSCProps>`
  font-size: 11px;
  margin-top: 12px;
  ${({ focused, theme: { colors, fonts } }) => css`
    font-family: ${fonts.medium};
    color: ${focused ? colors.primary : colors.text3};
  `};
`;

export {
  Line,
  Label,
  Container,
  IconWrapper,
};
