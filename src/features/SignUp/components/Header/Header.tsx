import React from 'react';

import en from '../../locales/en';
import { Container, Header, Description } from './Header.styled';

export default () => (
  <Container>
    <Header>{en.header}</Header>
    <Description>{en.description}</Description>
  </Container>
);
