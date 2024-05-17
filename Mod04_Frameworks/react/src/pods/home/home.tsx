import React from "react";
import { Tab, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { routes } from "@/core";
import "./home.styles.css";

export const Home = () => {
  return (
    <>
      <div className="home-header">
        <Box
          className="home-box"
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <Link
            className="home-link"
            to={routes.githubList}
          >
            <Tab label="Github" />
          </Link>
          <Link
            className="home-link"
            to={routes.rmList}
          >
            <Tab label="Rick and Morty" />
          </Link>
          <span className="home-text"> · Created with React, Typescript, MUI and Webpack · </span>
        </Box>
      </div>
    </>
  );
};
