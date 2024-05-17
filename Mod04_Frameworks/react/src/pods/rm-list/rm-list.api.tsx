import { RmPageEntity, CharEntity } from "./rm-list.vm";

export const getCharList = async (page: number, filter: string): Promise<RmPageEntity> => {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${filter}`);
    const data = await response.json();

    return {
      char: data.results as CharEntity[],
      totalPages: data.info.pages,
    };
  } catch (error) {
    console.error("Error fetching character:", error);
    return { char: [], totalPages: 0 };
  }
};
