import { Animated } from 'react-native';

import styled from 'theme/styled';

const Container = styled.View`
  margin-top: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Point = Animated.createAnimatedComponent(styled.View`
  height: 5px;
  border-radius: 5px;
  margin-left: 5px;
  margin-right: 5px;
`);

export { Container, Point };
