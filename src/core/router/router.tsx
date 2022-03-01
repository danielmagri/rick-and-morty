import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { makeHomePage } from "../factories/presentation";
import { Header, SideBar } from "../../presentation/components";

export const Router: React.FC = () => {
  return (
    <HashRouter>
      <Header />
      <SideBar>
        <Routes>
          <Route path="/" element={makeHomePage()} />
        </Routes>
      </SideBar>
    </HashRouter>
  );
};
