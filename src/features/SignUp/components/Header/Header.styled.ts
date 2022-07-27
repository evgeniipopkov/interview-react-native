import styled, { css } from 'theme/styled';

const Container = styled.View`
  flex: 1;
  margin: 48px 24px 0; 
`;

const Header = styled.Text`
  font-size: 32px;
  line-height: 38px;
  margin-top: 10px;
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.white};
    font-family: ${fonts.semiBold};
  `};
`;

const Description = styled.Text`
  font-size: 12px;
  line-height: 17px;
  margin-top: 5px;
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.text3};
    font-family: ${fonts.regular};
  `};
`;

export { Container, Header, Description };
