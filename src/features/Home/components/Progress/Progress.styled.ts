import styled, { css } from 'theme/styled';

const Container = styled.View`
  top: -55px;
  left: 20px;
  height: 110px;
  position: absolute;
  border-radius: 12px;
  padding: 20px 16px 20px;
  justify-content: space-between;
  ${({ theme: { colors, width } }) => css`
    width: ${width - 40}px;
    background-color: ${colors.white};
  `};
`;

const HeaderWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Header = styled.Text`
  font-size: 12px;
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.text2};
    font-family: ${fonts.regular};
  `};
`;

const Courses = styled.Text`
  font-size: 12px;
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.primary};
    font-family: ${fonts.regular};
  `};
`;

const TimeWrapper = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
`;

const Fact = styled.Text`
  font-size: 20px;
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.text1};
    font-family: ${fonts.semiBold};
  `};
`;

const Plan = styled.Text`
  font-size: 10px;
  margin-bottom: 4px;
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.text2};
    font-family: ${fonts.regular};
  `};
`;

const ProgressWrapper = styled.View`
  height: 6px;
  width: 100%;
  margin-top: 4px;
  border-radius: 22px;
  background-color: ${({ theme }) => theme.colors.text4};
`;

export {
  Fact,
  Plan,
  Header,
  Courses,
  Container,
  TimeWrapper,
  HeaderWrapper,
  ProgressWrapper,
};
