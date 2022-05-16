import React from "react";
import { Link, NavLink } from "react-router-dom";

import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import styled from "styled-components";

const Category = () => {
  return (
    <List>
      <Link to="/cuisine/italian">
        <FaPizzaSlice />
        <h4>Italian</h4>
      </Link>
      <Link to="/cuisine/american">
        <FaHamburger />
        <h4>American</h4>
      </Link>
    </List>
  );
};

const List = styled.div`
display: flex;
justify-content: center;
margin: 2rem 0rem;
`

export default Category;
