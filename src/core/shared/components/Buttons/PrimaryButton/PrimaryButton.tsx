import React from 'react';

import { PrimaryButtonProps } from './interfaces';
import { Button, ButtonText } from './PrimaryButton.styled';

const getOpacity = (disabled: boolean, pressed: boolean) => {
  if (disabled) return 0.5;
  return pressed ? 0.9 : 1;
};

export default ({
  children, width, disabled = false, onPress,
}: PrimaryButtonProps) => (
  <Button
    width={width || 0}
    onPress={onPress}
    disabled={disabled}
    style={({ pressed }) => ({ opacity: getOpacity(disabled, pressed) })}
  >
    <ButtonText>{children}</ButtonText>
  </Button>
);
