import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Recipe = () => {
  let { id } = useParams();
  const [activeTab, setActiveTab] = useState("instructions");
  const URL = `https://api.spoonacular.com/recipes/${id}/information?apiKey=b74e49827b6140dfb25f008f8e9f9424`;
  const [details, setDetails] = useState({});
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [id]);
  return (
    <DetailWrapper>
      <div>
        <h3>{details.title}</h3>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <Button onClick={() => setActiveTab("instructions")}>
          Instructions
        </Button>
        <Button onClick={() => setActiveTab("ingredient")}>About</Button>

        {activeTab === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}
        {activeTab === "ingredient" && (
          <ul>
            {details.extendedIngredients?.map((ingredient) => (
              <li>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  margin-top: 6rem;
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
  padding: 0.3rem 0.5rem;
  width: 70%;
  margin-bottom: 10px;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
`;
const Info = styled.div`
  margin-left: 10rem;
  /* display: flex; */
`;

export default Recipe;
