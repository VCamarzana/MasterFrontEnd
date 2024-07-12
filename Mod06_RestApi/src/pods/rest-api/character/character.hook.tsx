import React from 'react';
import { getCharacterRestApi } from './character.api';
import { CharEntity, createDefaultChar } from './character.vm';

export const useCharacter = (id: string) => {
  const [char, setChar] = React.useState<CharEntity>(createDefaultChar());

  React.useEffect(() => {
    getCharacterRestApi(id).then(setChar);
  }, [id]);

  return { char };
};
