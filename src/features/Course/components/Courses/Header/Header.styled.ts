import styled, { css } from 'theme/styled';
import { HeaderSCProps } from './interfaces';

const Container = styled.View`
  padding-top: 30px;
  padding-bottom: 25px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Header = styled.Text`
  font-size: 18px;
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.text1};
    font-family: ${fonts.medium};
  `};
`;

const Tabs = styled.View`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const Tab = styled.Pressable<HeaderSCProps>`
  padding: 5px 28px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${({ isActive, theme: { colors } }) => (isActive ? colors.primary : colors.white)};
`;

const TabText = styled.Text<HeaderSCProps>`
  font-size: 14px;
  ${({ isActive, theme: { colors, fonts } }) => css`
    font-family: ${fonts.regular};
    color: ${isActive ? colors.white : colors.text2};
  `};
`;

export {
  Tab,
  Tabs,
  Header,
  TabText,
  Container,
};
