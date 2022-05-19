import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Recipe = () => {
  let { id } = useParams();
  const URL = `https://api.spoonacular.com/recipes/${id}/information?apiKey=b74e49827b6140dfb25f008f8e9f9424`;
  const [details, setDetails] = useState({});
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [id]);
  return (
    <div>
      <h1>{details.title}</h1>
    </div>
  );
};

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.div`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;
const Info = styled.div`
  margin-left: 10rem;
`;

export default Recipe;
