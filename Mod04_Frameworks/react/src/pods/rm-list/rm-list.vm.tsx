export interface CharEntity {
  id: number;
  name: string;
  species: string;
  location: {
    name: string;
  };
  image: string;
  status: string;
}

export interface RmPageEntity {
  char: CharEntity[];
  totalPages: number;
}
