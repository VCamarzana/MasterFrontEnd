import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia } from '@mui/material';
import { CharContext, ListPagination, routes } from '@/core';
import { CharSearch } from './character-collection.search';
import { useCharacterCollection } from './character-collection.hook';
import { setColor } from '../character/components/character-color';
import './character-collection.styles.css';

export const CharCollectionRestApi: React.FC = () => {
  const { page, setPage } = React.useContext(CharContext);
  const { char, totalPages } = useCharacterCollection();

  const handleChangePage = (value: number) => {
    setPage(value);
  };

  return (
    <>
      <div className="char-collection-body">
        <div className="char-collection-content">
          <h1>Rick and Morty REST API</h1>
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
                          to={routes.charRestApi(char.id)}
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
          <ListPagination
            totalPages={totalPages}
            currentPage={page}
            onPageChange={handleChangePage}
          ></ListPagination>
        </div>
      </div>
    </>
  );
};
