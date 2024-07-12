import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';
import { useQuery, gql } from '@apollo/client';
import { setColor } from '@/pods/rest-api';
import { routes } from '@/core';
import '@/pods/rest-api/character/character.styles.css';

const getCharacter = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      gender
      origin {
        name
      }
      location {
        name
      }
      image
    }
  }
`;

export const CharGraphQL: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading } = useQuery(getCharacter, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;

  const char = data?.character;

  if (!char) {
    return <p>Character not found</p>;
  }

  return (
    <div className="char-body">
      <div className="char-content">
        <Card>
          <CardMedia
            className="char-img"
            component="img"
            alt={`Profile image of ${char.name}`}
            image={char.image}
          />
          {setColor(char)}
          <CardContent>
            <h2>{char.name}</h2>
            <p className="char-text">
              Id: <span>{char.id}</span>
              <br />
              Status: <span>{char.status}</span>
              <br />
              Species: <span>{char.species}</span>
              <br />
              Gender: <span>{char.gender}</span>
              <br />
              Location: <span>{char.location.name}</span>
              <br />
              Origin: <span>{char.origin.name}</span>
            </p>
          </CardContent>
          <CardActions className="char-button">
            <Link className="char-link" to={routes.charCollectionGraphQL}>
              <Button variant="contained" color="success" size="large">
                Close
              </Button>
            </Link>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};
