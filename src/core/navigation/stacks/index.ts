import { StackAnimationTypes } from 'react-native-screens';

import config from 'constants/config';
import { OnboardingScreen, SignUpScreen } from 'screens';

import createStack from '../helpers/navigation';

import { NoAuthStackList } from './types';

const defaultAnimation: StackAnimationTypes = config.IS_ANDROID ? 'fade' : 'slide_from_right';

const NoAuthStack = () => createStack<NoAuthStackList>(
  defaultAnimation,
  [
    { name: 'OnBoardingScreen', component: OnboardingScreen },
    { name: 'SignUpScreen', component: SignUpScreen },
  ],
);

const NoAuthStack2 = () => createStack<NoAuthStackList>(
  defaultAnimation,
  [
    { name: 'OnBoardingScreen', component: OnboardingScreen },
    { name: 'SignUpScreen', component: SignUpScreen },
  ],
);

export { NoAuthStack, NoAuthStack2 };
