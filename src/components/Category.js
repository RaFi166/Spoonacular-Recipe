import React from "react";
import { Link, NavLink } from "react-router-dom";

import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import styled from "styled-components";

const Category = () => {
  return (
    <List>
      <Link style={{ textDecoration: "none" }} to="/cuisine/italian">
        <FaPizzaSlice style={{ marginLeft: "15px" }} />
        <h4>Italian</h4>
      </Link>
      <Link
        style={{ textDecoration: "none", marginLeft: "25px" }}
        to="/cuisine/american"
      >
        <FaHamburger style={{ marginLeft: "25px" }} />
        <h4>American</h4>
      </Link>
      <Link
        style={{ textDecoration: "none", marginLeft: "25px" }}
        to="/cuisine/thai"
      >
        <FaHamburger style={{ marginLeft: "8px" }} />
        <h4>Thai</h4>
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
