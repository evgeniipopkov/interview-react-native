import { Animated } from 'react-native';

export default (value: Animated.Value, input: number[], output: number[] | string[]) => value.interpolate({
  inputRange: input, outputRange: output, extrapolate: 'clamp',
});
