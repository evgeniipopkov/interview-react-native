import styled, { css } from 'theme/styled';
import { CourseSCProps } from './interfaces';

const Container = styled.View`
  height: 100px;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
`;

const Image = styled.Image<CourseSCProps>`
  width: 70px;
  height: 70px;
  border-radius: 8px;
  ${({ isLoading }) => (isLoading
    ? css`
      position: absolute;
      opacity: 0;
    `
    : '')}
`;

const InfoWrapper = styled.View`
  margin-left: 35px;
`;

const Name = styled.Text`
  font-size: 14px;
  margin-top: -2px;
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.text1};
    font-family: ${fonts.medium};
  `};
`;

const SpeakerWrapper = styled.View`
  margin-vertical: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const Speaker = styled.Text`
  font-size: 12px;
  margin-left: 8px;
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.text3};
    font-family: ${fonts.medium};
  `};
`;

const SpecsWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const Price = styled.Text`
  font-size: 16px;
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.primary};
    font-family: ${fonts.semiBold};
  `};
`;

const HoursWrapper = styled.View`
  padding: 2px 8px;
  border-radius: 13px;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  background-color: ${({ theme }) => theme.colors.lightOrange};
`;

const Hours = styled.Text`
  font-size: 10px;
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.orange};
    font-family: ${fonts.regular};
  `};
`;

export {
  Name,
  Price,
  Hours,
  Image,
  Speaker,
  Container,
  InfoWrapper,
  HoursWrapper,
  SpecsWrapper,
  SpeakerWrapper,
};
