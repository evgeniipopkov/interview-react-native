import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';

interface IChildren {
  children?: ReactNode | null,
}

interface IStyle {
  style?: ViewStyle | ViewStyle[],
}

interface IColor {
  color: string
}

export { IChildren, IStyle, IColor };
