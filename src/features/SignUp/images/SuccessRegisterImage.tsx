/* eslint-disable max-len */
import React from 'react';

import Svg, {
  G,
  Path,
  Rect,
  Defs,
  ClipPath,
} from 'react-native-svg';

export default () => (
  <Svg width="65" height="65" viewBox="0 0 65 65" fill="none">
    <G clip-path="url(#clip0_2_2268)">
      <Rect x="0.5" y="0.5" width="64" height="64" rx="32" fill="#3D5CFF" />
      <Path d="M18.4514 32.7735L27.6884 42.0105L46.5474 23.1516" stroke="white" stroke-width="4.4012" stroke-linecap="round" stroke-linejoin="round" />
    </G>
    <Defs>
      <ClipPath id="clip0_2_2268">
        <Rect width="64" height="64" fill="white" transform="translate(0.5 0.5)" />
      </ClipPath>
    </Defs>
  </Svg>
);
