import React, { useState } from 'react';
import axios from 'axios';

const Product = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    const url = `http://openlibrary.org/search.json?q=${query}&limit=10`;

    try {
      const response = await axios.get(url);
      const products = response.data.docs;
      setResults(products);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {results.map((product) => (
          <li key={product.key}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
