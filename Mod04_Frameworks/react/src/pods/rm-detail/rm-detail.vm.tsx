export interface CharDetailEntity {
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
}

export const createDefaultCharDetail = () => ({
  id: 0,
  name: "",
  status: "",
  species: "",
  gender: "",
  origin: {
    name: "",
  },
  location: {
    name: "",
  },
  image: "",
});
