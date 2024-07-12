import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';
import { routes } from '@/core';
import { useCharacter } from './character.hook';
import { setColor } from '@/pods/rest-api';
import './character.styles.css';
import { AddBestSentences } from './character.addBestSentences';
import { getCharacter } from './character.api';

export const CharJsonServer: React.FC = () => {
  const { id } = useParams();
  const { char, setChar } = useCharacter(id);

  const refreshCharacter = async () => {
    const response = await getCharacter(id);
    setChar(response);
  };

  React.useEffect(() => {
    refreshCharacter();
  }, [id]);

  return (
    <>
      <div className="char-body">
        <div className="char-content-json-server">
          <Card>
            <CardMedia
              className="char-img"
              component="img"
              alt={`Profil image of ${char.name}`}
              image={char.image}
            />
            {setColor(char)}
            <CardContent className="char-info">
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
                <br />
                Best Sentences:
                <h5>
                  {char.bestSentences ? char.bestSentences.join(', ') : ''}
                </h5>
              </p>
            </CardContent>
            <CardActions className="char-button">
              <Link className="char-link" to={routes.charCollectionJsonServer}>
                <Button variant="contained" color="success" size="large">
                  Close
                </Button>
              </Link>
            </CardActions>
          </Card>
          <AddBestSentences refreshCharacter={refreshCharacter} />
        </div>
      </div>
    </>
  );
};
