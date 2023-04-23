// Import React and useEffect hooks
import React, { useEffect } from "react";
import { useState, } from 'react';

import styled from "styled-components";

const Card = styled.div`
  width: 300px;
  margin: 20px;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 15px;
`;

const CardTitle = styled.h5`
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

const CardText = styled.p`
  font-size: 16px;
  color: #666;
`;

const CardButton = styled.a`
  display: inline-block;
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
`;
// Define a styled component for the card container
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 32%);
  justify-content: space-between;
  flex-direction: row; 
  align-items: center; 
`;

function Categories() {
  const [products, setProducts] = useState([]);
  const [products1, setProducts1] = useState([]);
  const [products2, setProducts2] = useState([]);

  useEffect(() => {
    async function fetchPhones() {
      const response = await fetch("http://localhost:3000/scrape");
      const data = await response.json();
      setProducts(data.jiji_games);
      setProducts1(data.jumia_game);
    }
    fetchPhones();
  }, []);

  return(
    <div>
      {/* <h1>Phone List</h1> */}
      <h1>Games from Jumia</h1>
      <CardContainer> 
        {Array.isArray(products1) &&
          products1.map((product, index) => (
            <Card key={index}>
              {/* <img className="card-img-top" src={product.image} alt={product.title} /> */}
              <CardBody>
                <CardImage src={product.img} alt={product.title} />
                <h3>Sold by Jumia</h3>
                <CardTitle>Title: {product.title}</CardTitle>
                <CardText>Price: {product.price}</CardText>
                <CardButton href={product.link}>Go to Site</CardButton>
                {/* <p className="card-text">Image: {product.img}</p> */}
              </CardBody>
            </Card>
          ))}
      </CardContainer>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <h1>Games from Jiji</h1>
      <CardContainer> 
        {Array.isArray(products) &&
          products.map((product, index) => (
            <Card key={index}>
              {/* <img className="card-img-top" src={product.image} alt={product.title} /> */}
              <CardBody>
                <CardImage src={product.img} alt={product.title} />
                <h3>Sold by Jiji</h3>
                <CardTitle>Title: {product.title}</CardTitle>
                <CardText>Price: {product.price}</CardText>
                <CardButton href={product.link}>Go to Site</CardButton>
                {/* <p className="card-text">Image: {p */}
              </CardBody>
            </Card>
          ))}
      </CardContainer>
    </div>
  );
}

export default Categories;