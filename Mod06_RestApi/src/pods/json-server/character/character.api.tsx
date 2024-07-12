import axios from 'axios';

const url = 'http://localhost:3000/characters/';

export const getCharacter = async (id: string) => {
  const { data } = await axios.get(`${url}${id}`);
  return data;
};

export const addBestSentences = async (id: string, bestSentences: string) => {
  const char = await getCharacter(id);

  const updateChar = {
    ...char,
    bestSentences: [...char.bestSentences, bestSentences],
  };
  const { data: updateData } = await axios.patch(`${url}${id}`, updateChar);

  return { updateData };
};
