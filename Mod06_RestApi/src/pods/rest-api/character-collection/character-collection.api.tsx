import axios from 'axios';
import {
  CharPageEntity,
  CharCollectionEntity,
} from './character-collection.vm';

const url = 'https://rickandmortyapi.com/api/character/';

// Using axios (fetch was used in react exercise)

export const getCharCollection = async (
  page: number,
  filter: string
): Promise<CharPageEntity> => {
  try {
    const { data } = await axios.get(`${url}?page=${page}&name=${filter}`);

    return {
      char: data.results as CharCollectionEntity[],
      totalPages: data.info.pages,
    };
  } catch (error) {
    console.error('Error fetching character collection: ', error);
    return { char: [], totalPages: 0 };
  }
};
