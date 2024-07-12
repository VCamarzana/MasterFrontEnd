import axios from 'axios';
import { CharEntity } from './character.vm';

const url = 'https://rickandmortyapi.com/api/character/';

// Using axios (fetch was used in react exercise)

export const getCharacterRestApi = async (id: string): Promise<CharEntity> => {
  try {
    const { data } = await axios.get(`${url}${id}`);
    return data;
  } catch (error) {
    console.error('Error fetching character: ', error);
    return null;
  }
};
