import React, { useState } from 'react';

function SearchBar(props) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSearch(searchQuery);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Search for a product" value={searchQuery} onChange={handleInputChange} />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
