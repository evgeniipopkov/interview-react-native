import React from 'react';

import ArrowIcon from '../../images/ArrowIcon';
import { SectionsProps } from './interfaces';
import { Label, Wrapper, Container } from './Sections.styled';

export default ({ data }: SectionsProps) => (
  <Container>
    {data.map(({ label, onPress }) => (
      <Wrapper key={label} onPress={onPress}>
        <Label>{label}</Label>
        <ArrowIcon />
      </Wrapper>
    ))}
  </Container>
);
