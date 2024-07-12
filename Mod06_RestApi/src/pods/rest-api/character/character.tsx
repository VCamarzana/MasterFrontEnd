import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';
import { useCharacter } from './character.hook';
import { setColor } from './components/character-color';
import { routes } from '@/core';
import './character.styles.css';

export const Char: React.FC = () => {
  const { id } = useParams();
  const { char } = useCharacter(id);

  return (
    <>
      <div className="char-body">
        <div className="char-content">
          <Card>
            <CardMedia
              className="char-img"
              component="img"
              alt={`Profil image of ${char.name}`}
              image={char.image}
            />
            {setColor(char)}
            <CardContent>
              <h2>{char.name}</h2>
              <p className="char-text">
                Id: <span> {char.id}</span>
                <br />
                Status: <span> {char.status}</span>
                <br />
                Species: <span> {char.species}</span>
                <br />
                Gender: <span> {char.gender}</span>
                <br />
                Location: <span> {char.location.name}</span>
                <br />
                Origin: <span> {char.origin.name}</span>
              </p>
            </CardContent>
            <CardActions className="char-button">
              <Link className="char-link" to={routes.charCollectionRestApi}>
                <Button variant="contained" color="success" size="large">
                  Close
                </Button>
              </Link>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
};
