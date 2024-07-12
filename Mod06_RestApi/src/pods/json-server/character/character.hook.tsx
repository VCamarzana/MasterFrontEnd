import React from 'react';
import { getCharacter } from './character.api';
import { CharEntity, createDefaultChar } from '@/pods/rest-api';

export const useCharacter = (id: string) => {
  const [char, setChar] = React.useState<CharEntity>(createDefaultChar());

  React.useEffect(() => {
    getCharacter(id).then(setChar);
  }, [id]);

  return { char, setChar };
};
