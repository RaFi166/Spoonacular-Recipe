import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useParams } from "react-router-dom";

const Cuisine = () => {
  const [param, setParam] = useState([]);
  let { id } = useParams();
  const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=b74e49827b6140dfb25f008f8e9f9424&cuisine=${id}`;
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setParam(data.results));
  }, [id]);

  return (
    <Grid>
      {param?.map((datas) => (
        <Card key={datas.id}>
          <h4>{datas.title}</h4>
          <img src={datas.image} alt="" />
        </Card>
      ))}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Cuisine;
