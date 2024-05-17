import { RmContext } from "@/core/providers/rm.context";
import { Box, TextField, Button } from "@mui/material";
import React from "react";

export const RmSearch: React.FC = () => {
  const { setPage, setFilter } = React.useContext(RmContext);
  const [input, setInput] = React.useState<string>("");

  const handleCharChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    setFilter(input);
    setPage(1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === "enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <Box
      className="rm-search"
      component="form"
      noValidate
      autoComplete="off"
    >
      <h2>Search characters:</h2>
      <TextField
        placeholder="Enter a character name"
        className="rm-input"
        color="success"
        inputMode="text"
        id="outlined-basic"
        variant="outlined"
        value={input}
        onKeyDown={handleKeyDown}
        onChange={handleCharChange}
      />
      <Button
        className="rm-button"
        variant="contained"
        color="success"
        onClick={handleSearch}
      >
        Search
      </Button>
    </Box>
  );
};
