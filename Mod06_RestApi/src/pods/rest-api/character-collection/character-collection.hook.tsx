import React from 'react';
import { useDebounce } from 'use-debounce';
import { getCharCollection } from './character-collection.api';
import { CharCollectionEntity } from './character-collection.vm';
import { CharContext } from '@/core';

export const useCharacterCollection = () => {
  const { page, filter } = React.useContext(CharContext);

  const [debouncedFilter] = useDebounce(filter, 500);
  const [totalPages, setTotalPages] = React.useState<number>(1);
  const [char, setChar] = React.useState<CharCollectionEntity[]>([]);

  React.useEffect(() => {
    getCharCollection(page, filter).then(({ char, totalPages }) => {
      setChar(char);
      setTotalPages(totalPages);
    });
  }, [debouncedFilter, page]);

  return { char, totalPages };
};
