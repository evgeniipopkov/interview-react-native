import styled, { css } from 'theme/styled';

const ModalContainer = styled.Pressable`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(31, 31, 57, 0.8);
`;

const Content = styled.Pressable`
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  padding: 48px 16px 36px;
  ${({ theme: { width, colors } }) => css`
    width: ${width - 42 * 2}px;
    background-color: ${colors.white};  
  `};
`;

const Header = styled.Text`
  font-size: 16px;
  margin-vertical: 18px;
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.text1};
    font-family: ${fonts.medium};
  `};
`;

const Description = styled.Text`
  width: 70%;
  font-size: 12px;
  text-align: center;
  margin-bottom: 18px;
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.text2};
    font-family: ${fonts.regular};
  `};
`;

export {
  Header,
  Content,
  Description,
  ModalContainer,
};
