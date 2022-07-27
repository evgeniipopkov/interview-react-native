import config from 'constants/config';
import styled, { css } from 'theme/styled';
import { FormSCProps } from './interfaces';

const Container = styled.View`
  flex: 6;
  padding: 32px 24px 24px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const AgreeWrapper = styled.Pressable`
  margin-bottom: 28px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

const AgreeText = styled.Text`
  width: 80%;
  font-size: 12px;
  line-height: 18px;
  margin-left: 10px;
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.text2};
    font-family: ${fonts.regular};
  `};
`;

const CheckWrapper = styled.View<Pick<FormSCProps, 'isActive'>>`
  width: 16px;
  height: 16px;
  border-radius: 3px;
  border-width: 1px;
  margin-top: 2px;
  align-items: center;
  justify-content: center;
  ${({ isActive, theme: { colors } }) => css`
    border-color: ${isActive ? colors.primary : colors.text3};
    background-color: ${isActive ? colors.primary : colors.white};
  `}; 
`;

const InputContainer = styled.View`
  margin-bottom: 26px;
`;

const InputWrapper = styled.View<Pick<FormSCProps, 'valid'>>`
  width: 100%;
  margin-top: 4px;
  border-radius: 12px;
  border-width: 0.5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${config.IS_ANDROID ? '10px 14px' : '12px 14px'};
  border-color: ${({ valid, theme: { colors } }) => (valid ? colors.text3 : colors.valid)};
`;

const InputLabel = styled.Text`
  font-size: 14px;
  line-height: 21px;
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.text2};
    font-family: ${fonts.regular};
  `};
`;

const Input = styled.TextInput<Pick<FormSCProps, 'existIcon' | 'valid'>>`
  padding: 0;
  font-size: 14px;
  line-height: 20px;
  ${({ valid, existIcon, theme: { colors, fonts } }) => css`
    width: ${existIcon ? 80 : 100}%;
    color: ${valid ? colors.text1 : colors.valid};
    font-family: ${fonts.regular};
  `};
`;

export {
  Input,
  AgreeText,
  Container,
  InputLabel,
  InputWrapper,
  AgreeWrapper,
  CheckWrapper,
  InputContainer,
};
