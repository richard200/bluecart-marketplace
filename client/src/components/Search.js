import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = ({ query, setQuery }) => {
  // Define a state to store the products
  const [products, setProducts] = useState([]);

  // Define a function to handle the input change
  const handleChange = (e) => {
    // Get the value of the input
    const value = e.target.value;

    // Update the parent component's state with the value
    setQuery(value);
  };

  // Define a function to fetch data from the API
  const fetchData = () => {
    // Use axios to make a GET request to the API
    axios
      .get("http://localhost:3000/scrape")
      .then((response) => {
        // Store the response data in the products state
        setProducts(response.data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };

  // Use useEffect to call fetchData when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Define a filteredProducts variable to hold the filtered products
  let filteredProducts = [];

  // If the products state has been initialized, filter the products
  if (Array.isArray(products) && products.length > 0) {
    filteredProducts = products.filter((product) => {
      // Return true if the product name includes the query
      return product.name.toLowerCase().includes(query.toLowerCase());
    });
  }

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={handleChange}
      />
      {/* Display the filtered products */}
      <div className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
