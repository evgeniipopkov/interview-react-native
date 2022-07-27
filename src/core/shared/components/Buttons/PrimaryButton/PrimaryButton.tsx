import React from 'react';

import { PrimaryButtonProps } from './interfaces';
import { Button, ButtonText } from './PrimaryButton.styled';

export default ({ children, width, onPress }: PrimaryButtonProps) => (
  <Button width={width} onPress={onPress}>
    <ButtonText>{children}</ButtonText>
  </Button>
);
