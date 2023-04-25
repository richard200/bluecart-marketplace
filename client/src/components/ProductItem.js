import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  // Destructure the product data
  const { id, name, price, image } = product;

  return (
    <div className="product-item">
      <Link to={`/products/${id}`}>
        <h3>{name}</h3>
        <p>${price}</p>
        <img src={image} alt={name} />
      </Link>
    </div>
  );
};

export default ProductItem;