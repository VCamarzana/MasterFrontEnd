import axios from 'axios';
import { CharPageEntity, CharCollectionEntity } from '@/pods/rest-api';

const url = 'http://localhost:3000/characters/';

export const getCharCollection = async (
  filter: string
): Promise<CharPageEntity> => {
  try {
    const { data } = await axios.get(`${url}?name_like=${filter}`);

    return {
      char: data as CharCollectionEntity[],
      totalPages: 0,
    };
  } catch (error) {
    console.error('Error fetching character: ', error);
    return { char: [], totalPages: 0 };
  }
};
