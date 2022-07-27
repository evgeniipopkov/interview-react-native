import React from 'react';

import { PointsProps } from './interfaces';
import { Container, Point } from './Points.styled';

export default ({ width, color }: PointsProps) => (
  <Container>
    {Array.from({ length: 3 }, (_, idx: number) => (
      <Point key={idx.toString()} style={{ width: width(idx), backgroundColor: color(idx) }} />
    ))}
  </Container>
);
