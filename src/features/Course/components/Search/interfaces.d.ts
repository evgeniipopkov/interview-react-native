import { Dispatch, SetStateAction } from 'react';

export interface SearchProps {
  search: string,
  setSearch: Dispatch<SetStateAction<string>>
}
