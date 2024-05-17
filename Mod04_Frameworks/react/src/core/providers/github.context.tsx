import React from "react";

interface Props {
  org: string;
  setOrg: (org: string) => void;
  page: number;
  setPage: (page: number) => void;
  filter: string;
  setFilter: (filter: string) => void;
}

export const OrgContext = React.createContext<Props>({
  org: "",
  setOrg: () => {},
  page: 1,
  setPage: () => {},
  filter: "",
  setFilter: () => {},
});

export const OrgProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [org, setOrg] = React.useState("lemoncode");
  const [page, setPage] = React.useState(1);
  const [filter, setFilter] = React.useState("lemoncode");

  return (
    <OrgContext.Provider value={{ org, setOrg, page, setPage, filter, setFilter }}>{children}</OrgContext.Provider>
  );
};
