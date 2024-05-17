import React from "react";
import { OrgContext } from "@/core/providers/github.context";
import { Box, TextField, Button } from "@mui/material";

export const GithubSearch: React.FC = () => {
  const { setOrg, setPage, filter, setFilter } = React.useContext(OrgContext);
  const [input, setInput] = React.useState<string>("");

  const handleOrgChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSearch = () => {
    setFilter(input);
    setOrg(filter);
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
      className="github-search"
      component="form"
      noValidate
      autoComplete="off"
    >
      <TextField
        inputMode="text"
        className="github-input"
        placeholder="Enter a company name"
        id="outlined-basic"
        variant="outlined"
        value={input}
        onKeyDown={handleKeyDown}
        onChange={handleOrgChange}
      />
      <Button
        className="github-button"
        variant="outlined"
        onClick={handleSearch}
      >
        Search
      </Button>
    </Box>
  );
};
