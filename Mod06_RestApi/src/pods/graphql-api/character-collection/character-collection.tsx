import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia } from '@mui/material';
import { useDebounce } from 'use-debounce';
import '@/pods/rest-api/character-collection/character-collection.styles.css';
import { CharContext, ListPagination, routes } from '@/core';
import { getCharCollection } from './character-collection.api';
import { CharCollectionEntity, CharSearch, setColor } from '@/pods/rest-api';

export const CharCollectionGraphQL: React.FC = () => {
  const { page, setPage, filter } = React.useContext(CharContext);
  const [char, setChar] = React.useState<CharCollectionEntity[]>([]);
  const [debouncedFilter] = useDebounce(filter, 500);
  const [totalPages, setTotalPages] = React.useState<number>(1);

  React.useEffect(() => {
    getCharCollection(page, filter).then(({ char, totalPages }) => {
      setChar(char);
      setTotalPages(totalPages);
    });
  }, [debouncedFilter, page]);

  const handleChangePage = (value: number) => {
    setPage(value);
  };

  return (
    <div className="char-collection-body">
      <div className="char-collection-content">
        <h1>Rick and Morty GraphQL</h1>
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
                    alt={`Profile image of ${char.name}`}
                    height="150px"
                    image={char.image}
                  />
                  {setColor(char)}
                  <CardContent>
                    <h3>
                      <Link
                        className="char-collection-link"
                        to={routes.charGraphQL(char.id)}
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
        />
      </div>
    </div>
  );
};
