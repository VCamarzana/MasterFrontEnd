import React from "react";

interface Props {
  page: number;
  setPage: (page: number) => void;
  filter: string;
  setFilter: (filter: string) => void;
}

export const RmContext = React.createContext<Props>({
  page: 1,
  setPage: () => {},
  filter: "",
  setFilter: () => {},
});

export const RmProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [page, setPage] = React.useState(1);
  const [filter, setFilter] = React.useState("");

  return <RmContext.Provider value={{ page, setPage, filter, setFilter }}>{children}</RmContext.Provider>;
};
