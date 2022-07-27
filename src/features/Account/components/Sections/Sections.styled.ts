import styled, { css } from 'theme/styled';

const Container = styled.View`
  margin-top: 44px;
`;

const Wrapper = styled.Pressable`
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Label = styled.Text`
  font-size: 16px;
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.text1};
    font-family: ${fonts.medium};
  `};
`;

export { Label, Wrapper, Container };
