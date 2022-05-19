import React from "react";
import Cuisine from "../src/components/Cuisine";
import { Route, Routes } from "react-router-dom";
import Category from "./components/Category";
import Home from "./Pages/Home";
import Search from "./components/Search";
import Searched from "./components/Searched";
import Recipe from "./components/Recipe";

const App = () => {
  return (
    <div>
      <Search />
      <Category />
      <Routes>
        <Route path="/cuisine/:id" element={<Cuisine />} />
        <Route path="/" element={<Home />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </div>
  );
};

export default App;
