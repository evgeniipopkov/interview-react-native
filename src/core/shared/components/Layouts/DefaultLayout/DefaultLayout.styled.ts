import styled, { css } from 'theme/styled';
import { DefaultLayoutSCProps } from './interfaces';

const HeaderContainer = styled.View`
  margin-top: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const HeaderWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const Header = styled.Text<DefaultLayoutSCProps>`
  font-size: 24px;
  ${({ offset, theme: { colors, fonts } }) => css`
    color: ${colors.text1};
    margin-left: ${offset}px;
    font-family: ${fonts.semiBold};
  `};
`;

export { HeaderContainer, HeaderWrapper, Header };
