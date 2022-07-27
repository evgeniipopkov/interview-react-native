import { Animated } from 'react-native';
import { IUseNativeAnimatedEvent } from './interfaces';

const useNativeAnimatedEvent: IUseNativeAnimatedEvent = (
  key,
  value,
  useNativeDriver = false,
) => Animated.event(
  [{ nativeEvent: { contentOffset: { [key]: value } } }],
  { useNativeDriver },
);

export default useNativeAnimatedEvent;
