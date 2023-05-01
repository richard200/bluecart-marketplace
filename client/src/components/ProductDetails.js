import React from "react";
import { useParams } from "react-router-dom";
import useProductData from "./hooks/useProductData";

const ProductDetails = () => {
  // Use the useParams hook to get the product id from the URL
  const { id } = useParams();

  // Use a custom hook to fetch the product data from the backend service
  const { loading, error, data } = useProductData(id);

  // Render a loading message while fetching the data
  if (loading) {
    return <div className="product-details">Loading...</div>;
  }

  // Render an error message if there is an error
  if (error) {
    return <div className="product-details">Error: {error.message}</div>;
  }

  // Render the product details if there is data
  if (data) {
    // Destructure the product data
    const { name, price, description, image } = data;

    return (
      <div className="product-details">
        <h2>{name}</h2>
        <p>${price}</p>
        <p>{description}</p>
        <img src={image} alt={name} />
      </div>
    );
  }

  // Render a message if there is no data
  return <div className="product-details">No product found.</div>;
};

export default ProductDetails;