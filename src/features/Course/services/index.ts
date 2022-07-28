/* eslint-disable @typescript-eslint/ban-ts-comment */
import firestore from '@react-native-firebase/firestore';
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

import { randomInteger, timeout } from 'helpers/utils';
import { ICourse } from './interfaces';

export const coursesAPI = createApi({
  reducerPath: 'coursesAPI',
  baseQuery: fakeBaseQuery(),
  endpoints: (build) => ({
    getCourses: build.query<ICourse[], void>({
      // @ts-ignore
      queryFn: async () => {
        try {
          await timeout(300);
          const courses = await firestore().collection('Courses').get();
          return {
            data: courses.docs.map((course) => ({
              ...course.data(),
              idxImage: randomInteger(0, 5),
            })),
          };
        } catch (e) {
          return { error: e };
        }
      },
    }),
  }),
});

export const { useGetCoursesQuery } = coursesAPI;
