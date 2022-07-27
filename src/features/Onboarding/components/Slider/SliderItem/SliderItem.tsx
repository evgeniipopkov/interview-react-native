import React from 'react';

import { SliderItemProps } from './interfaces';
import { Container, Header, Description } from './SliderItem.styled';

export default ({ item: { header, description, Image } }: SliderItemProps) => (
  <Container>
    <Image />
    <Header>{header}</Header>
    <Description>{description}</Description>
  </Container>
);
