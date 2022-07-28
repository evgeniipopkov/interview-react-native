import React, { useEffect, useState } from 'react';
import { FlatList, RefreshControl, ScrollView } from 'react-native';

import { colors } from 'theme';
import { useFlatListItem } from 'customHooks';

import Course from './Course';
import Header from './Header';
import Placeholder from './Placeholder';
import { useGetCoursesQuery } from '../../services';
import { ICourse } from '../../services/interfaces';

const getItem = ({ item }: { item: ICourse }) => <Course item={item} />;

export default () => {
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const {
    data,
    isLoading,
    isFetching,
    refetch,
  } = useGetCoursesQuery();

  useEffect(() => {
    refetch();
  }, [refreshing]);

  useEffect(() => {
    if (!isFetching && refreshing) setRefreshing(false);
  }, [isFetching]);

  const { keyExtractor, renderItem } = useFlatListItem<ICourse>('name', getItem);

  const refreshControl = (
    <RefreshControl
      refreshing={refreshing}
      onRefresh={() => setRefreshing(true)}
      tintColor={colors.primary}
      colors={[colors.primary]}
    />
  );

  return isLoading
    ? (
      <>
        <Header />
        <ScrollView
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
        >
          {/* eslint-disable-next-line react/no-array-index-key */}
          {Array.from({ length: 4 }).map((_, idx) => <Placeholder key={idx} />)}
        </ScrollView>
      </>
    )
    : (
      <FlatList<ICourse>
        data={data}
        windowSize={10}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        scrollEventThrottle={16}
        stickyHeaderIndices={[0]}
        refreshControl={refreshControl}
        ListHeaderComponent={<Header />}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    );
};
