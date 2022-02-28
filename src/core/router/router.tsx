import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../../presentation/pages";

export const Router: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </HashRouter>
  );
};
