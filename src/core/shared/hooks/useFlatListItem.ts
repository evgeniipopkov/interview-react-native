import { useCallback } from 'react';
import { IGetItem } from './interfaces';

const useFlatListItem = <T>(key: keyof T, getItem: IGetItem<T>, deps?: unknown[]) => ({
  keyExtractor: useCallback((item: T) => String(item[key]), []),
  renderItem: useCallback(getItem, deps || []),
});

export default useFlatListItem;
