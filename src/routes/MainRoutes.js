import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../components/HomePage";
import ProductList from "../components/ProductList";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="p-list" element={<ProductList />} />
    </Routes>
  );
};

export default MainRoutes;
