import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CharProvider } from '../providers/char.context';
import { switchRoutes } from './routes';
import {
  HomePage,
  CharCollectionPageRestApi,
  CharCollectionPageJsonServer,
  CharPageRestApi,
  CharPageJsonServer,
  CharCollectionPageGraphQL,
  CharPageGraphQL,
} from '@/scenes';
import { ApolloProvider } from '@apollo/client';
import { client } from '@/pods/graphql-api/apollo-client';

export const RouterComponent: React.FC = () => {
  return (
    <Router>
      <ApolloProvider client={client}>
        <CharProvider>
          <HomePage />
          <Routes>
            <Route path={switchRoutes.root} element={<HomePage />} />
            <Route
              path={switchRoutes.charCollectionRestApi}
              element={<CharCollectionPageRestApi />}
            />
            <Route
              path={switchRoutes.charRestApi}
              element={<CharPageRestApi />}
            />
            <Route
              path={switchRoutes.charCollectionJsonServer}
              element={<CharCollectionPageJsonServer />}
            />
            <Route
              path={switchRoutes.charJsonServer}
              element={<CharPageJsonServer />}
            />
            <Route
              path={switchRoutes.charCollectionGraphQL}
              element={<CharCollectionPageGraphQL />}
            />
            <Route
              path={switchRoutes.charGraphQL}
              element={<CharPageGraphQL />}
            />
          </Routes>
        </CharProvider>
      </ApolloProvider>
    </Router>
  );
};
