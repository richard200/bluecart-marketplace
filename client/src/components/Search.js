import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = ({}) => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);

  const fetchData = async (searchQuery) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/scrape`
      );
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData("");
  }, []);

  const handleChange = (e) => {
    setQuery(e.target.value);
    fetchData(e.target.value);
  };

  let filteredProducts = [];
  if (Array.isArray(products) && products.length > 0) {
    filteredProducts = products.filter((product) => {
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
      <div className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))
        ) : (
          <p>.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
