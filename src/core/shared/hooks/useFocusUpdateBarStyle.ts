/* eslint-disable @typescript-eslint/no-explicit-any */
import { EffectCallback, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { StatusBarStyle } from 'react-native';
import { setBarStyle } from 'store/app/slice';

const useSetActiveNavigation = (
  barStyle: StatusBarStyle,
  useFocusEffect: (effect: EffectCallback) => void,
) => {
  const dispatch = useDispatch();

  useFocusEffect(useCallback(() => {
    dispatch(setBarStyle(barStyle));
  }, []));
};

export default useSetActiveNavigation;
