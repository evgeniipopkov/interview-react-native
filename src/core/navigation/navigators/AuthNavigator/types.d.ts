import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

type RouteType<T> = {
  name: T,
  key: string
}

type TabBarNameType = 'HomeTab'
  | 'CourseTab'
  | 'SearchTab'
  | 'MessageTab'
  | 'AccountTab'

type BottomTabStackList = {
  [propName in TabBarNameType]: undefined
}

type BottomTabNavigationType = BottomTabNavigationProp<BottomTabStackList, 'HomeTab'>

export {
  RouteType,
  TabBarNameType,
  BottomTabStackList,
  BottomTabNavigationType,
};
