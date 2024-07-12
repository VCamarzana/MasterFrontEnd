import React from 'react';
import { useDebounce } from 'use-debounce';
import { CharContext } from '@/core';
import { CharCollectionEntity } from '@/pods/rest-api';
import { getCharCollection } from './character-collection.api';

export const useCharacterCollection = () => {
  const { filter } = React.useContext(CharContext);
  const [debouncedFilter] = useDebounce(filter, 500);
  const [char, setChar] = React.useState<CharCollectionEntity[]>([]);

  React.useEffect(() => {
    getCharCollection(filter).then(({ char }) => {
      setChar(char);
    });
  }, [debouncedFilter]);

  return { char };
};
