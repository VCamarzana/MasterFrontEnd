import { gql } from '@apollo/client';
import { CharPageEntity, CharCollectionEntity } from '@/pods/rest-api';
import { client } from '../apollo-client';

const getCharactersCollection = gql`
  query GetCharacters($page: Int, $filter: String) {
    characters(page: $page, filter: { name: $filter }) {
      results {
        id
        name
        status
        image
        species
        location {
          name
        }
      }
      info {
        pages
      }
    }
  }
`;

export const getCharCollection = async (
  page: number,
  filter: string
): Promise<CharPageEntity> => {
  try {
    const { data } = await client.query({
      query: getCharactersCollection,
      variables: { page, filter },
    });

    return {
      char: data.characters.results as CharCollectionEntity[],
      totalPages: data.characters.info.pages,
    };
  } catch (error) {
    console.error('Error fetching character: ', error);
    return { char: [], totalPages: 0 };
  }
};
