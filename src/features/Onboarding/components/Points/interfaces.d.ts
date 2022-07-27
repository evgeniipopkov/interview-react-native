import { Animated } from 'react-native';

export interface PointsProps {
  width: (index: number) => Animated.AnimatedInterpolation,
  color: (index: number) => Animated.AnimatedInterpolation,
}
