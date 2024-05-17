import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, GithubListPage, GithubDetailPage, RmDetailPage, RmListPage } from "@/scenes";
import { OrgProvider } from "../providers/github.context";
import { RmProvider } from "../providers/rm.context";

export const RouterComponent: React.FC = () => {
  return (
    <Router>
      <OrgProvider>
        <RmProvider>
          <HomePage />
          <Routes>
            <Route
              path="/github-list"
              element={<GithubListPage />}
            />
            <Route
              path="/github-detail/:id"
              element={<GithubDetailPage />}
            />
            <Route
              path="/rm-list"
              element={<RmListPage />}
            />
            <Route
              path="/rm-detail/:id"
              element={<RmDetailPage />}
            />
          </Routes>
        </RmProvider>
      </OrgProvider>
    </Router>
  );
};
