import styled, { css } from 'theme/styled';

const Button = styled.Pressable<{ width?: number }>`
  height: 50px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  ${({ width, theme }) => css`
    width: ${width ? `${width}px` : '100%'}
    background-color: ${theme.colors.primary};
  `};
`;

const ButtonText = styled.Text`
  font-size: 16px;
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.white};
    font-family: ${fonts.medium};
  `};
`;

export { Button, ButtonText };
