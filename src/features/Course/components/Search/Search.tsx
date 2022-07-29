import React, { useEffect, useState } from 'react';

import { colors } from 'theme';

import en from '../../locales/en';
import { SearchIcon } from '../../images';
import { SearchProps } from './interfaces';
import { Container, Search } from './Search.styled';

export default ({ search, setSearch }: SearchProps) => {
  const [value, setValue] = useState<string>(search);

  const onBlur = () => setValue(search);

  const onSubmitEditing = () => setSearch(value);

  useEffect(() => {
    setValue(search);
  }, [search]);

  return (
    <Container>
      <SearchIcon />
      <Search
        value={value}
        returnKeyType="search"
        autoCapitalize="none"
        placeholder={en.searchPlaceholder}
        placeholderTextColor={colors.text3}
        onBlur={onBlur}
        onChangeText={setValue}
        onSubmitEditing={onSubmitEditing}
      />
    </Container>
  );
};
