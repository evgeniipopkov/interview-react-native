import React from 'react';

import { PrimaryButton } from 'components';

import en from '../../locales/en';
import { SignUpProps } from './interfaces';
import { Container, FakeView } from './SignUp.styled';

export default ({ currentIdx, onPress }: SignUpProps) => (
  <Container>
    {currentIdx === 2
      ? (
        <PrimaryButton onPress={onPress} width={160}>
          {en.signUp}
        </PrimaryButton>
      )
      : <FakeView />}
  </Container>
);
