import axios from 'axios';
import { Resolvers } from '@apollo/client';

const url = 'http://localhost:8080/characters/';

export const resolvers: Resolvers = {
  Query: {
    character: async (_, { id }): Promise<CharacterData> => {
      const response = await axios.get(`${url}${id}`);
      return response.data;
    },
  },
};
