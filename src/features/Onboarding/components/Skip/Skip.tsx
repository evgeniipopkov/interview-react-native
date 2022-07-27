import React from 'react';

import en from '../../locales/en';
import { SkipProps } from './interfaces';

import {
  Container,
  FakeView,
  Button,
  ButtonText,
} from './Skip.styled';

export default ({ currentIdx, onPress }: SkipProps) => (
  <Container>
    <FakeView />
    {currentIdx < 2
      ? (
        <Button onPress={onPress}>
          <ButtonText>{en.skip}</ButtonText>
        </Button>
      )
      : <FakeView />}
  </Container>
);
