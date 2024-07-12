import { generatePath } from 'react-router-dom';

interface SwitchRoutes {
  root: string;
  charCollectionRestApi: string;
  charRestApi: string;
  charCollectionJsonServer: string;
  charJsonServer: string;
  charCollectionGraphQL: string;
  charGraphQL: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  charCollectionRestApi: '/character-collection-rest-api',
  charRestApi: '/character-rest-api/:id',
  charCollectionJsonServer: '/character-collection-json-server',
  charJsonServer: '/character-json-server/:id',
  charCollectionGraphQL: '/character-collection-graphql',
  charGraphQL: '/character-graphql/:id',
};

interface Routes
  extends Omit<SwitchRoutes, 'charRestApi' | 'charJsonServer' | 'charGraphQL'> {
  charRestApi: (id: number) => string;
  charJsonServer: (id: number) => string;
  charGraphQL: (id: number) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  charRestApi: id => generatePath(switchRoutes.charRestApi, { id }),
  charJsonServer: id => generatePath(switchRoutes.charJsonServer, { id }),
  charGraphQL: id => generatePath(switchRoutes.charGraphQL, { id }),
};
