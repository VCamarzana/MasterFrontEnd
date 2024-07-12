export interface CharEntity {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
  bestSentences?: [];
}

export const createDefaultChar = () => ({
  id: 0,
  name: '',
  status: '',
  species: '',
  gender: '',
  origin: {
    name: '',
  },
  location: {
    name: '',
  },
  image: '',
});
