import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const location = useLocation();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/scrape");
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getQuery = () => {
    const search = location.search;

    if (search) {
      const [key, value] = search.slice(1).split("=");

      if (key === "query") {
        return decodeURIComponent(value);
      }
    }

    return "";
  };

  const filterProducts = (products, query) => {
    if (!Array.isArray(products)) {
      // Return an empty array if the products parameter is not an array
      return [];
    }
  
    if (query) {
      return products.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase())
      );
    }
  
    return products;
  };
  

  if (loading) {
    return <div className="product-list">Loading...</div>;
  }

  if (error) {
    return <div className="product-list">Error: {error.message}</div>;
  }

  if (!data) {
    return <div className="product-list">No products found.</div>;
  }

  const query = getQuery();

  const filteredProducts = filterProducts(data, query);

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
