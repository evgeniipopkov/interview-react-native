import { Dispatch, FC, SetStateAction } from 'react';

interface IOnboardingItem {
  header: string,
  description: string,
  Image: FC,
}

interface SliderProps {
  setCurrentIdx: Dispatch<SetStateAction<number>>
}

export { IOnboardingItem, SliderProps };
