import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, TextField, Button } from '@mui/material';
import { addBestSentences } from './character.api';

interface AddBestSentencesProps {
  refreshCharacter: () => void;
}

export const AddBestSentences: React.FC<AddBestSentencesProps> = ({
  refreshCharacter,
}) => {
  const { id } = useParams();
  const [bestSentence, setBestSentence] = React.useState('');

  const handleAddBestSentence = async () => {
    try {
      await addBestSentences(id, bestSentence);
      setBestSentence('');
      refreshCharacter();
    } catch (error) {
      console.error('Error adding best sentence: ', error);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === 'enter') {
      e.preventDefault();
      handleAddBestSentence();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBestSentence(e.target.value);
  };

  return (
    <Box className="char-add" component="form" noValidate autoComplete="off">
      <TextField
        placeholder="Enter best sentence"
        className="char-add-input"
        color="success"
        inputMode="text"
        id="outlined-basic"
        variant="outlined"
        value={bestSentence}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
      <Button
        className="char-add-button"
        variant="contained"
        color="success"
        size="large"
        onClick={handleAddBestSentence}
      >
        Add sentence
      </Button>
    </Box>
  );
};
