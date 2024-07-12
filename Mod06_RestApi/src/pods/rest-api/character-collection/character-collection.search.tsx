import React from 'react';
import { Box, TextField, Button } from '@mui/material';
import { CharContext } from '@/core';

export const CharSearch: React.FC = () => {
  const { setPage, setFilter } = React.useContext(CharContext);
  const [input, setInput] = React.useState<string>('');

  const handleCharChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    setFilter(input);
    setPage(1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === 'enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <Box className="char-search" component="form" noValidate autoComplete="off">
      <h2>Search characters:</h2>
      <TextField
        placeholder="Enter a character name"
        className="char-input"
        color="success"
        inputMode="text"
        id="outlined-basic"
        variant="outlined"
        value={input}
        onKeyDown={handleKeyDown}
        onChange={handleCharChange}
      />
      <Button
        className="char-collection-button"
        variant="contained"
        color="success"
        size="large"
        onClick={handleSearch}
      >
        Search
      </Button>
    </Box>
  );
};
