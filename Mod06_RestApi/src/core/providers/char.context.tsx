import React from 'react';

interface Props {
  page: number;
  setPage: (page: number) => void;
  filter: string;
  setFilter: (filter: string) => void;
}

export const CharContext = React.createContext<Props>({
  page: 1,
  setPage: () => {},
  filter: '',
  setFilter: () => {},
});

export const CharProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [page, setPage] = React.useState(1);
  const [filter, setFilter] = React.useState('');

  return (
    <CharContext.Provider value={{ page, setPage, filter, setFilter }}>
      {children}
    </CharContext.Provider>
  );
};
