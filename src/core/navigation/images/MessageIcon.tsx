/* eslint-disable max-len */
import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IColor } from 'interfaces';

export default ({ color }: IColor) => (
  <Svg width="20" height="18" viewBox="0 0 20 18" fill="none">
    <Path fillRule="evenodd" clipRule="evenodd" d="M3 0H17C18.6569 0 20 1.34315 20 3V13C20 14.6569 18.6569 16 17 16H13.3028L10.6934 17.7396C10.2735 18.0195 9.7265 18.0195 9.30662 17.7396L6.69722 16H3C1.34315 16 0 14.6569 0 13V3C0 1.34315 1.34315 0 3 0ZM6.5 10C5.67157 10 5 9.32843 5 8.5C5 7.67157 5.67157 7 6.5 7C7.32843 7 8 7.67157 8 8.5C8 9.32843 7.32843 10 6.5 10ZM15 8.5C15 7.67157 14.3284 7 13.5 7C12.6716 7 12 7.67157 12 8.5C12 9.32843 12.6716 10 13.5 10C14.3284 10 15 9.32843 15 8.5Z" fill={color} />
  </Svg>
);
