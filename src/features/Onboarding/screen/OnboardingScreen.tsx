import React, { useState } from 'react';
import { ViewStyle } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { NoAuthStackList } from 'navigation/stacks/types';
import { AppStatusBar, DefaultContainer } from 'components';

import { Skip, Slider, SignUp } from '../components';

const containerStyle: ViewStyle = { justifyContent: 'space-between', paddingBottom: 60 };

export default ({ navigation }: NativeStackScreenProps<NoAuthStackList>) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  const navigateSignUp = () => navigation.navigate('SignUpScreen');

  return (
    <DefaultContainer style={containerStyle}>
      <AppStatusBar barStyle="dark-content" />
      <Skip currentIdx={currentIdx} onPress={navigateSignUp} />
      <Slider setCurrentIdx={setCurrentIdx} />
      <SignUp currentIdx={currentIdx} onPress={navigateSignUp} />
    </DefaultContainer>
  );
};
