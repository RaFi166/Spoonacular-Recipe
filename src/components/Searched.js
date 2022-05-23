import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Searched = () => {
  const [searchdata, setSearchData] = useState([]);
  const [error, setError] = useState("");
  const { search } = useParams();
  const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=b74e49827b6140dfb25f008f8e9f9424&query=${search}`;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setSearchData(data.results));
  }, [searchdata]);
  return (
    <Grid>
      {searchdata?.map((singledata) => (
        <Link to={"/recipe/" + singledata.id}>
          <Card>
            <h4>{singledata.title}</h4>
            <img src={singledata.image} alt="" />
          </Card>
        </Link>
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
    text-decoration: none;
  }
`;

export default Searched;
