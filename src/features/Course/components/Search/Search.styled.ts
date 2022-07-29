import config from 'constants/config';
import styled, { css } from 'theme/styled';

const Container = styled.View`
  margin-top: 15px;
  flex-direction: row;
  border-radius: 12px;
  align-items: center;
  justify-content: flex-start;
  padding-horizontal: 18px;
  background-color: ${({ theme }) => theme.colors.text4};
`;

const Search = styled.TextInput`
  width: 90%;
  font-size: 14px;
  margin-left: 14px;
  padding-vertical: ${config.IS_ANDROID ? 10 : 14}px;
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.text1};
    font-family: ${fonts.regular};
  `};
`;

export { Container, Search };
