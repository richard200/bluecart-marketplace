import React, { useState, useEffect } from "react";
import { CardActionArea, Card, CardContent, Typography } from "@material-ui/core";

const TopProducts = () => {
  // State to store the top products
  const [products, setProducts] = useState([]);

  // Fetch the top products from backend when the component mounts
  useEffect(() => {
    fetch("/api/products/top?category=mobile7phones&action")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  // Define some styles for the components
  const topProductsStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "800px",
    margin: "0 auto",
  };

  const productCardStyle = {
    width: "250px",
    height: "350px",
    margin: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };

  const productImageStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  };

  const productNameStyle = {
    fontWeight: "bold",
    color: "#212121",
  };

  const productPriceStyle = {
    color: "#757575",
  };

  // Render the products as cards with action areas
  return (
    <div className="top-products" style={topProductsStyle}>
      {products.map((product) => (
        <Card key={product.id} className="product-card" style={productCardStyle}>
          <CardActionArea href={`/products/${product.id}`}>
            <img src={product.image} alt={product.name} className="product-image" style={productImageStyle} />
            <CardContent>
              <Typography variant="h6" className="product-name" style={productNameStyle}>
                {product.name}
              </Typography>
              <Typography variant="body1" className="product-price" style={productPriceStyle}>
                ${product.price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};

export default TopProducts;