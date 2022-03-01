import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { makeDetailsPage, makeHomePage } from "../factories/presentation";
import { Header, SideBar } from "../../presentation/components";

export const Router: React.FC = () => {
  return (
    <HashRouter>
      <Header />
      <SideBar>
        <Routes>
          <Route path="/" element={makeHomePage()} />
          <Route path="/details/:id" element={makeDetailsPage()} />
        </Routes>
      </SideBar>
    </HashRouter>
  );
};
