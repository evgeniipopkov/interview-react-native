import React from 'react';
import { FlatList, ViewStyle } from 'react-native';

import { useFlatListItem } from 'customHooks';

import Banner from './Banner';
import { IBanner } from './interfaces';
import { Banner1, Banner2 } from '../../images';

const contentContainerStyle: ViewStyle = { paddingHorizontal: 20, marginTop: 58 };

const getItem = ({ item, index }: { item: IBanner, index?: number }) => (
  <Banner
    item={item}
    index={index || 0}
  />
);

export default () => {
  const data = [
    { id: '0', Image: Banner1 },
    { id: '1', Image: Banner2 },
  ];

  const { keyExtractor, renderItem } = useFlatListItem<IBanner>('id', getItem);

  return (
    <FlatList<IBanner>
      horizontal
      data={data}
      scrollEventThrottle={16}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={contentContainerStyle}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};
