import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia } from '@mui/material';
import { routes } from '@/core';
import { useCharacterCollection } from './character-collection.hook';
import { setColor } from '@/pods/rest-api';
import '@/pods/rest-api/character-collection/character-collection.styles.css';
import { CharSearch } from './character-collection.search';

export const CharCollectionJsonServer: React.FC = () => {
  const { char } = useCharacterCollection();

  return (
    <>
      <div className="char-collection-body">
        <div className="char-collection-content">
          <h1>Rick and Morty Json server</h1>
          <CharSearch />
          <div className="char">
            {char.length === 0 ? (
              <p>There is no character with this name. Please check the name</p>
            ) : (
              char.map(char => (
                <React.Fragment key={char.id}>
                  <Card className="char-card">
                    <CardMedia
                      component="img"
                      alt={`Profil image of ${char.name}`}
                      height="150px"
                      image={char.image}
                    />
                    {setColor(char)}
                    <CardContent>
                      <h3>
                        <Link
                          className="char-collection-link"
                          to={routes.charJsonServer(char.id)}
                        >
                          {char.name}
                        </Link>
                      </h3>
                      <span className="char-text">
                        {char.species}
                        <br />
                        <span style={{ fontWeight: 'lighter' }}>
                          {char.location.name}
                        </span>
                      </span>
                    </CardContent>
                  </Card>
                </React.Fragment>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};
