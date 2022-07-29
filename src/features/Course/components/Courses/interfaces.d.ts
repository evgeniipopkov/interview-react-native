import { Dispatch, SetStateAction } from 'react';

export interface CoursesProps {
  search: string,
  setSearch: Dispatch<SetStateAction<string>>
}
