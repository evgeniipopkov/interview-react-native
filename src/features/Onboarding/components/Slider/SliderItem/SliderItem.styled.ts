import { height } from 'constants/sizes';
import styled, { css } from 'theme/styled';

const MIN_HEIGHT = 420;
const CURRENT_HEIGHT = height * 0.54;
const HEIGHT = CURRENT_HEIGHT < MIN_HEIGHT ? MIN_HEIGHT : CURRENT_HEIGHT;

const Container = styled.View`
  align-items: center;
  justify-content: space-between;
  height: ${HEIGHT}px;
  width: ${({ theme }) => theme.width}px;
`;

const Header = styled.Text`
  width: 216px;
  font-size: 22px;
  line-height: 32px;
  text-align: center;
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.text1};
    font-family: ${fonts.semiBold};
  `};
`;

const Description = styled.Text`
  width: 216px;
  height: 72px;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.text2};
    font-family: ${fonts.regular};
  `};
`;

export { Container, Header, Description };
