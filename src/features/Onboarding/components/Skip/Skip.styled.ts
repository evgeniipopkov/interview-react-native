import styled, { css } from 'theme/styled';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 30px 24px 10px;
`;

const FakeView = styled.View`
  height: 20px;
`;

const Button = styled.Pressable`
  height: 20px;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  font-size: 14px;
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.textSecondary};
    font-family: ${fonts.regular};
  `};
`;

export {
  Container,
  FakeView,
  Button,
  ButtonText,
};
