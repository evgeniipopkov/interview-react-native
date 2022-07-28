import styled, { css } from 'theme/styled';

const Container = styled.View`
  overflow: hidden;
  margin: 20px 20px 0;
  border-radius: 12px;
  padding-bottom: 20px;
`;

const Header = styled.Text`
  font-size: 18px;
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.text1};
    font-family: ${fonts.medium};
  `};
`;

const DetailsContainer = styled.View`
  elevation: 2;
  shadow-radius: 5px;
  border-radius: 12px;
  shadow-opacity: 0.09;
  shadow-offset: 0px 5px;
  padding: 4px 16px 16px;
  ${({ theme: { colors } }) => css`
    shadow-color: ${colors.text3};
    background-color: ${colors.white};
  `};
`;

const DetailsWrapper = styled.View`
  margin-top: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ChartWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const Label = styled.Text`
  font-size: 14px;
  margin-left: 10px;
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.text1};
    font-family: ${fonts.medium};
  `};
`;

const FactWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const Fact = styled.Text`
  font-size: 14px;
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.text1};
    font-family: ${fonts.regular};
  `};
`;

const Plan = styled.Text`
  font-size: 14px;
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.text3};
    font-family: ${fonts.regular};
  `};
`;

export {
  Fact,
  Plan,
  Label,
  Header,
  Container,
  FactWrapper,
  ChartWrapper,
  DetailsWrapper,
  DetailsContainer,
};
