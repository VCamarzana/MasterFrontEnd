export interface CharCollectionEntity {
  id: number;
  name: string;
  species: string;
  location: {
    name: string;
  };
  image: string;
  status: string;
}

export interface CharPageEntity {
  char: CharCollectionEntity[];
  totalPages: number;
}
