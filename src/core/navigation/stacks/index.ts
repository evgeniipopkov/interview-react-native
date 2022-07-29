import { StackAnimationTypes } from 'react-native-screens';

import {
  HelpScreen,
  SignUpScreen,
  AccountScreen,
  SettingsScreen,
  FavoriteScreen,
  EditAccountScreen,
  OnboardingScreen,
} from 'screens';

import config from 'constants/config';
import createStack from '../helpers/navigation';
import { AccountStackList, NoAuthStackList } from './types';

const defaultAnimation: StackAnimationTypes = config.IS_ANDROID ? 'fade' : 'slide_from_right';

const NoAuthStack = () => createStack<NoAuthStackList>(
  defaultAnimation,
  [
    { name: 'OnBoardingScreen', component: OnboardingScreen },
    { name: 'SignUpScreen', component: SignUpScreen },
  ],
);

const AccountStack = () => createStack<AccountStackList>(
  defaultAnimation,
  [
    { name: 'AccountScreen', component: AccountScreen },
    { name: 'HelpScreen', component: HelpScreen },
    { name: 'FavoriteScreen', component: FavoriteScreen },
    { name: 'SettingsScreen', component: SettingsScreen },
    { name: 'EditAccountScreen', component: EditAccountScreen, presentation: config.IS_ANDROID ? 'card' : 'modal' },
  ],
);

export { NoAuthStack, AccountStack };
