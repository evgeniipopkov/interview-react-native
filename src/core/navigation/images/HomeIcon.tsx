/* eslint-disable max-len */
import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IColor } from 'interfaces';

export default ({ color }: IColor) => (
  <Svg width="19" height="19" viewBox="0 0 19 19" fill="none">
    <Path fillRule="evenodd" clipRule="evenodd" d="M10.7 0.495947L17.7 5.74595C18.2036 6.12366 18.5 6.71643 18.5 7.34595V16.8459C18.5 17.9505 17.6046 18.8459 16.5 18.8459H2.5C1.39543 18.8459 0.5 17.9505 0.5 16.8459V7.34595C0.5 6.71643 0.796388 6.12366 1.3 5.74595L8.3 0.495947C9.01111 -0.0373862 9.98889 -0.0373859 10.7 0.495947Z" fill={color} />
  </Svg>
);
