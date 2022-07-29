import React, { useEffect, useState } from 'react';
import { FlatList, RefreshControl, ScrollView } from 'react-native';

import { colors } from 'theme';
import { useFlatListItem } from 'customHooks';

import Course from './Course';
import Header from './Header';
import Placeholder from './Placeholder';
import { CoursesProps } from './interfaces';
import { useGetCoursesQuery } from '../../services';
import { ICourse } from '../../services/interfaces';

const getItem = ({ item }: { item: ICourse }) => <Course item={item} />;

const getCourses = (search: string, data: ICourse[]) => {
  const val = search.trim().toLowerCase();
  if (!val) return data;

  const indexOf = (v: string) => v.indexOf(val) !== -1;
  return data.filter((item) => indexOf(item.name.trim().toLowerCase()));
};

export default ({ search, setSearch }: CoursesProps) => {
  const {
    data,
    isLoading,
    isFetching,
    refetch,
  } = useGetCoursesQuery();

  const [courses, setCourses] = useState<ICourse[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  useEffect(() => {
    if (data) setCourses(getCourses(search, data));
  }, [search, data]);

  useEffect(() => {
    if (refreshing) {
      refetch();
      setSearch('');
    }
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
          {Array.from({ length: 3 }).map((_, idx) => <Placeholder key={idx} />)}
        </ScrollView>
      </>
    )
    : (
      <FlatList<ICourse>
        data={courses}
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
