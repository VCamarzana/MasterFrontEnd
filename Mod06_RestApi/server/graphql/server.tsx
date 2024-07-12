import 'regenerator-runtime/runtime';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled,
} from 'apollo-server-core';

import path from 'path';
import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';

const PORT = 8080;

(async function () {
  const app = express();
  app.use(express.json());

  const graphqlServer = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
      process.env.NODE_ENV === 'production'
        ? ApolloServerPluginLandingPageDisabled()
        : ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
  });

  await graphqlServer.start();
  graphqlServer.applyMiddleware({ app });

  const publicPath = path.resolve(__dirname, './public');
  app.use(express.static(publicPath));

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(
      `GraphQL server ready at http://localhost:${PORT}${graphqlServer.graphqlPath}`
    );
  });
})();
