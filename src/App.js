import React from "react";
import Cuisine from "../src/components/Cuisine";
import { Route, Routes } from "react-router-dom";
import Category from "./components/Category";
import Home from "./Pages/Home";
import Search from "./components/Search";
import Searched from "./components/Searched";
import Recipe from "./components/Recipe";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import styled from "styled-components";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <div>
      <Nav>
        <GiKnifeFork />
        <Logo
          style={{ marginLeft: "10px", color: "black", fontWeight: "bold" }}
          to={"/"}
        >
          Spoonacular
        </Logo>
      </Nav>
      <Search />
      <Category />
      <Routes>
        <Route path="/cuisine/:id" element={<Cuisine />} />
        <Route path="/" element={<Home />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
`;

const Nav = styled.div`
  padding: 1rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export default App;
