import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Vegeterian = () => {
  const [veg, setVeg] = useState([]);
  useEffect(() => {
    vegdata();
  }, []);

  const vegdata = () => {
    const check = localStorage.getItem("veggie");
    if (check) {
      setVeg(JSON.parse(check));
    } else {
      fetch(
        "https://api.spoonacular.com/recipes/random?apiKey=b74e49827b6140dfb25f008f8e9f9424&number=9&tags=vegetarian"
      )
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("veggie", JSON.stringify(data.recipes));
          setVeg(data.recipes);
        });
    }
  }

  return (
   
      <Wrapper>
        <h3>Vegeterian.. </h3>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {veg?.map((vegg) => (
            <SplideSlide>
              <Card key={vegg.title}>
                <p>{vegg.title}</p>
                <img src={vegg.image} alt="" />
              </Card>
            </SplideSlide>
          ))}
        </Splide>
      </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;
const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 50%;
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

export default Vegeterian;
