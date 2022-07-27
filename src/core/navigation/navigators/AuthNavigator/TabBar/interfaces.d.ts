import { IState } from '../interfaces';
import { BottomTabNavigationType, TabBarNameType } from '../types';

interface TabBarProps {
  state: IState<TabBarNameType>,
  navigation: BottomTabNavigationType,
}

interface TabBarSCProps {
  focused: boolean
}

export { TabBarProps, TabBarSCProps };
