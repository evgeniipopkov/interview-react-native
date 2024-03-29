import React, { useState } from 'react';
import { ViewStyle } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { DefaultContainer } from 'components';
import { useFocusUpdateBarStyle } from 'customHooks';
import { NoAuthStackList } from 'navigation/stacks/types';

import { Skip, Slider, SignUp } from '../components';

const containerStyle: ViewStyle = { justifyContent: 'space-between', paddingBottom: 60 };

export default ({ navigation }: NativeStackScreenProps<NoAuthStackList>) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  const navigateSignUp = () => navigation.navigate('SignUpScreen');

  useFocusUpdateBarStyle('dark-content', useFocusEffect);

  return (
    <DefaultContainer style={containerStyle}>
      <Skip currentIdx={currentIdx} onPress={navigateSignUp} />
      <Slider setCurrentIdx={setCurrentIdx} />
      <SignUp currentIdx={currentIdx} onPress={navigateSignUp} />
    </DefaultContainer>
  );
};
