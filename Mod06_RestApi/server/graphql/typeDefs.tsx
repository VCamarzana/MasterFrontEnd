import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    character(id: ID!): Character
  }

  type Origin {
    name: String
  }

  type Location {
    name: String
  }

  type Character {
    id: ID!
    name: String!
    status: String
    species: String
    origin: Origin
    location: Location
    image: String
    episode: [String]
    url: String
    created: String
  }
`;
