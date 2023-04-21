import React, { useState, useRef } from "react";
import axios from "axios";
import "./SearchBar.css"; // Import the CSS file for the search bar styling

function SearchBar() {
  // Use state to store the input value
  const [value, setValue] = useState("");
  // Use ref to access the input element
  const inputRef = useRef();

  // Handle the input change event
  const handleChange = (e) => {
    // Set the value state to the input value
    setValue(e.target.value);
  };

  // Handle the submit event
  const handleSubmit = (e) => {
    // Prevent the default browser behavior
    e.preventDefault();
    // Make an HTTP request to the backend with the value as a parameter
    axios
      .get("/api/search", { params: { query: value } })
      .then((response) => {
        // Do something with the response data
        console.log(response.data);
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
    // Clear the input value and focus on it
    setValue("");
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        ref={inputRef}
        placeholder="Enter a product name"
        className="search-bar-input" 
      />
      <button type="submit" className="search-bar-button">Search</button> 
    </form>
  );
}

export default SearchBar;
