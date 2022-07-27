import { Animated, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';

interface IItem<T> {
  item: T,
  index?: number
}

interface IGetItem<T> {
  (props: IItem<T>): JSX.Element
}

interface IUseNativeAnimatedEvent {
  (
    key: 'x' | 'y',
    value: Animated.Value,
    useNativeDriver?: boolean
  ): ((event: NativeSyntheticEvent<NativeScrollEvent>) => void) | undefined
}

export { IGetItem, IUseNativeAnimatedEvent };
