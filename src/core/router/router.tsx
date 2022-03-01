import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../../presentation/pages";
import { Header, SideBar } from "../../presentation/components";

export const Router: React.FC = () => {
  return (
    <HashRouter>
        <Header />
      <SideBar>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </SideBar>
    </HashRouter>
  );
};
