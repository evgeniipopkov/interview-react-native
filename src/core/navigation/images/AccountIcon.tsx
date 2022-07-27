/* eslint-disable max-len */
import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IColor } from 'interfaces';

export default ({ color }: IColor) => (
  <Svg width="18" height="20" viewBox="0 0 18 20" fill="none">
    <Path fillRule="evenodd" clipRule="evenodd" d="M4 5C4 7.76142 6.23858 10 9 10C11.7614 10 14 7.76142 14 5C14 2.23858 11.7614 0 9 0C6.23858 0 4 2.23858 4 5ZM0 17V18C0 19.1046 0.89543 20 2 20H16C17.1046 20 18 19.1046 18 18V17C18 14.2386 15.7614 12 13 12H5C2.23858 12 0 14.2386 0 17Z" fill={color} />
  </Svg>
);
