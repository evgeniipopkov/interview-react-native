import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Container from './DefaultContainer.styled';
import { DefaultContainerProps } from './interfaces';

export default ({ children, style, paddingTop = 0 }: DefaultContainerProps) => {
  const insets = useSafeAreaInsets();

  return (
    <Container style={[{ paddingTop: insets.top + paddingTop }, style]}>
      {children}
    </Container>
  );
};
