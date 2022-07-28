import styled, { css } from 'theme/styled';

const Container = styled.View`
  flex: 1;
  margin: 20px 20px 0; 
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

const Header = styled.Text`
  font-size: 24px;
  line-height: 36px;
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.white};
    font-family: ${fonts.semiBold};
  `};
`;

const Description = styled.Text`
  font-size: 14px;
  line-height: 21px;
  margin-top: 5px;
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.white};
    font-family: ${fonts.regular};
  `};
`;

export { Container, Header, Description };
