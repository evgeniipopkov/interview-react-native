import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { FlatList, RefreshControl, ScrollView } from 'react-native';

import randomInteger from 'helpers/utils';
import { colors } from 'theme';
import { useFlatListItem } from 'customHooks';

import Course from './Course';
import Header from './Header';
import Placeholder from './Placeholder';
import { ICourse } from './interfaces';

const getItem = ({ item }: { item: ICourse }) => <Course item={item} />;

export default () => {
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  useEffect(() => {
    if (!isLoading && !refreshing) return;

    firestore()
      .collection('Courses')
      .get()
      .then((r) => setCourses(r.docs.map((d) => ({
        ...d.data(),
        idxImage: randomInteger(0, 5),
      }) as ICourse)))
      .finally(() => {
        if (refreshing) setRefreshing(false);
        if (isLoading) setTimeout(() => setIsLoading(false), 800);
      });
  }, [isLoading, refreshing]);

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
