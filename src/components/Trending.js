import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

const Trending = () => {
  const URL =
    "https://api.spoonacular.com/recipes/random?apiKey=b74e49827b6140dfb25f008f8e9f9424&number=9";
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    getTrend();
  }, []);

  const getTrend = () => {
    const check = localStorage.getItem("trends");
    if (check) {
      setTrending(JSON.parse(check));
    } else {
      fetch(URL)
        .then((res) => res.json())
        .then((data) => {
          setTrending(data.recipes);
          localStorage.setItem("trends", JSON.stringify(data.recipes));
        });
    }
  };

  return (
    <Wrapper>
      <h3>Trending.. </h3>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
      >
        {trending?.map((trenddata) => (
          <SplideSlide>
            <Link to={"/recipe/" + trenddata.id}>
              <Card key={trenddata.id}>
                <p>{trenddata.title}</p>
                <img src={trenddata.image} alt="" />
              </Card>
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0px;
`;
const Card = styled.div`
  min-height: 12rem;
  border-radius: 2rem;
  overflow: hidden;
  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export default Trending;
