import React from "react";
import { useLocation } from "react-router-dom";
import useProductData from "./hooks/useProductData";
import ProductItem from "./ProductItem";

const ProductList = () => {
  // Use the useLocation hook to get the location object
  const location = useLocation();

  // Use a custom hook to fetch the products data from the backend service
  const { loading, error, data } = useProductData();

  // Define a function to get the query parameter from the location
  const getQuery = () => {
    // Get the search string from the location
    const search = location.search;

    // Check if the search string is not empty
    if (search) {
      // Remove the leading question mark and split by equal sign
      const [key, value] = search.slice(1).split("=");

      // Check if the key is "query"
      if (key === "query") {
        // Return the decoded value
        return decodeURIComponent(value);
      }
    }

    // Return an empty string if no query parameter is found
    return "";
  };

  // Define a function to filter the products by the query
  const filterProducts = (products, query) => {
    // Check if the query is not empty
    if (query) {
      // Return only the products that match the query in their name or description
      return products.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Return all products if no query is given
    return products;
  };

  // Render a loading message while fetching the data
  if (loading) {
    return <div className="product-list">Loading...</div>;
  }

  // Render an error message if there is an error
  if (error) {
    return <div className="product-list">Error: {error.message}</div>;
  }

  // Render a message if there is no data
  if (!data) {
    return <div className="product-list">No products found.</div>;
  }

  // Get the query parameter from the location
  const query = getQuery();

  // Filter the products by the query
  const filteredProducts = filterProducts(data, query);

  // Render a list of product items if there is data and filtered products
  return (
    <div className="product-list">
      <h2>Products</h2>
      {query && <p>Showing results for "{query}"</p>}
      {filteredProducts.length > 0 ? (
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              <ProductItem product={product} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No products match your search.</p>
      )}
    </div>
  );
};

export default ProductList;