import { RouteType } from './types';

export interface IState<T> {
  routes: RouteType<T>[],
  index: number,
}
