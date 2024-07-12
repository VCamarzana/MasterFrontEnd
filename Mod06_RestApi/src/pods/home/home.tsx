import React from 'react';
import { Tab, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './home.styles.css';
import { routes } from '@/core';

export const Home = () => {
  return (
    <>
      <div className="home-header">
        <Box
          className="home-box"
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Link className="home-link" to={routes.charCollectionRestApi}>
            <Tab label="REST API" />
          </Link>
          <Link className="home-link" to={routes.charCollectionJsonServer}>
            <Tab label="Json Server" />
          </Link>
          <Link className="home-link" to={routes.charCollectionGraphQL}>
            <Tab label="GraphQL" />
          </Link>
          <span className="home-text">
            {' '}
            · Created with React, Typescript, MUI and Webpack ·{' '}
          </span>
        </Box>
      </div>
    </>
  );
};
