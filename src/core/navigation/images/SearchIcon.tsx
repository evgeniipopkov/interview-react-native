/* eslint-disable max-len */
import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

export default ({ opacityCircle, colorSearch }: { opacityCircle: string, colorSearch: string }) => (
  <Svg width="52" height="52" viewBox="0 0 52 52" fill="none">
    <Circle opacity={opacityCircle} cx="26" cy="26" r="26" fill="#3D5CFF" />
    <Path fillRule="evenodd" clipRule="evenodd" d="M24.7499 16.8334C29.1222 16.8334 32.6666 20.3778 32.6666 24.75C32.6666 26.636 32.0071 28.3679 30.9062 29.7278L33.9671 32.7887C34.2926 33.1142 34.2926 33.6418 33.9671 33.9673C33.6417 34.2927 33.1141 34.2927 32.7886 33.9673L29.7277 30.9063C28.3678 32.0072 26.6359 32.6667 24.7499 32.6667C20.3777 32.6667 16.8333 29.1223 16.8333 24.75C16.8333 20.3778 20.3777 16.8334 24.7499 16.8334ZM18.4999 24.75C18.4999 28.2018 21.2982 31 24.7499 31C28.2017 31 30.9999 28.2018 30.9999 24.75C30.9999 21.2983 28.2017 18.5 24.7499 18.5C21.2982 18.5 18.4999 21.2983 18.4999 24.75Z" fill={colorSearch} />
  </Svg>
);
