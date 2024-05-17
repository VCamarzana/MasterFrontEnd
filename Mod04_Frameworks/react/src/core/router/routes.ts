import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  githubList: string;
  rmList: string;
  githubDetails: string;
  rmDetails: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  githubList: "/github-list",
  rmList: "/rm-list",
  githubDetails: "/github-detail/:id",
  rmDetails: "/rm-detail/:id",
};

interface Routes extends Omit<SwitchRoutes, "githubDetail" | "rmDetail"> {
  githubDetail: (id: string) => string;
  rmDetail: (id: number) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  githubDetail: id => generatePath(switchRoutes.githubDetails, { id }),
  rmDetail: id => generatePath(switchRoutes.rmDetails, { id }),
};
