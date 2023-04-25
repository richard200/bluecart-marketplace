import React from "react";


const Search = ({ query, setQuery }) => {
  // Define a function to handle the input change
  const handleChange = (e) => {
    // Get the value of the input
    const value = e.target.value;

    // Update the parent component's state with the value
    setQuery(value);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;