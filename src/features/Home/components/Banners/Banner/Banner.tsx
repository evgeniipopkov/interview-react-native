import React from 'react';

import Container from './Banner.styled';
import { BannerProps } from './interfaces';

export default ({ item: { Image }, index }: BannerProps) => (
  <Container index={index}>
    <Image />
  </Container>
);
