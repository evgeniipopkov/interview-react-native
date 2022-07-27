import React, { useCallback, useRef } from 'react';
import { Animated, FlatList, ViewToken } from 'react-native';

import { colors } from 'theme';
import { width } from 'constants/sizes';
import { useNativeAnimatedEvent, useFlatListItem, useNativeInterpolate } from 'customHooks';

import Points from '../Points';
import SliderItem from './SliderItem';
import Container from './Slider.styled';
import data from '../../mock/onboardingItems';
import { IOnboardingItem, SliderProps } from './interfaces';

const { tertiary, primary } = colors;

const getItem = ({ item }: { item: IOnboardingItem }) => <SliderItem item={item} />;

export default ({ setCurrentIdx }: SliderProps) => {
  const xOffset = useRef(new Animated.Value(0)).current;

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  const onViewableItemsChanged = useRef(
    ({ changed }: { changed: Array<ViewToken> }) => setCurrentIdx(changed[0]?.index || 0),
  );

  const inputRangeX = useCallback(
    (idx: number) => [(idx - 1) * width, idx * width, (idx + 1) * width],
    [],
  );

  const interpolateWidth = (idx: number) => useNativeInterpolate(
    xOffset,
    inputRangeX(idx),
    [9, 28, 9],
  );

  const interpolateColor = (idx: number) => useNativeInterpolate(
    xOffset,
    inputRangeX(idx),
    [tertiary, primary, tertiary],
  );

  const scrollEventX = useNativeAnimatedEvent('x', xOffset);

  const { keyExtractor, renderItem } = useFlatListItem<IOnboardingItem>('header', getItem);

  return (
    <Container>
      <FlatList<IOnboardingItem>
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        data={data as unknown as IOnboardingItem[]}
        onScroll={scrollEventX}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewableItemsChanged.current}
      />
      <Points width={interpolateWidth} color={interpolateColor} />
    </Container>
  );
};
