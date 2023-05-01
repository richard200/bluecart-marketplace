// Import React and useEffect hooks
import React, { useEffect } from "react";
import { useState, } from 'react';
import ScrollToTop from "react-scroll-to-top";

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
  padding-top: 100px;
  padding: 15px;
`;

const CardTitle = styled.h1`
  padding-top: 10px;
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
padding-top: 50px;
  display: grid;
  grid-template-columns: repeat(3, 32%);
  justify-content: space-between;
  flex-direction: row; 
  align-items: center; 
`;
function Categories() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStore, setSelectedStore] = useState("All");

  useEffect(() => {
    async function fetchGames() {
      const response = await fetch("http://localhost:3000/scrape");
      const data = await response.json();
      const allProducts = [
        ...data.jiji_games.map((product) => ({
          ...product,
          source: "Jiji",
        })),
        ...data.jumia_game.map((product) => ({
          ...product,
          source: "Jumia",
        })),
      ];
      setProducts(allProducts);
    }
    fetchGames();
  }, []);

  const filteredProducts = products.filter((product) => {
    return (
      (selectedCategory === "All" || selectedCategory === product.category) &&
      (selectedStore === "All" || selectedStore === product.source) &&
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const stores = [
    "All",
    ...new Set(products.map((product) => product.source)),
  ];

  return (
    <div>
      <h1>Games</h1>
      <div>
        <label>Search by title:</label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        <label>Select a category:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Select a store:</label>
        <select
          value={selectedStore}
          onChange={(e) => setSelectedStore(e.target.value)}
        >
          {stores.map((store, index) => (
            <option key={index} value={store}>
              {store}
            </option>
          ))}
        </select>
      </div>
      <CardContainer>
        {filteredProducts.map((product, index) => (
          <Card key={index}>
            <CardBody>
              <CardImage src={product.img} alt={product.title} />
              <h3>Sold by {product.source}</h3>
              <CardTitle>Title: {product.title}</CardTitle>
              <CardText>Price: {product.price}</CardText>
              <CardButton href={product.link}>Go to Site</CardButton>
            </CardBody>
          </Card>
        ))}
      </CardContainer>

      {/* Add the ScrollToTop component with some custom styles */}
      <ScrollToTop smooth style={{ backgroundColor: "orange", borderRadius: "50%", bottom: "20px", right: "20px" }} />
    </div>
  );
}

export default Categories;