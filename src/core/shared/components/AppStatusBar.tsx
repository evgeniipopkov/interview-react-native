import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setBarStyle } from 'store/app/slice';

import selectors from 'store/selectors';

export default () => {
  const barStyle = useSelector(selectors.app.barStyle);
  const isRegistered = useSelector(selectors.user.isRegistered);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBarStyle(isRegistered ? 'light-content' : 'dark-content'));
  }, [isRegistered]);

  return (
    <StatusBar
      translucent
      barStyle={barStyle}
      backgroundColor="transparent"
    />
  );
};
