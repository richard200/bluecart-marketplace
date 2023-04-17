import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Footer from './Footer';


function Homepage() {
    const [searchResults, setSearchResults] = useState([]);
  
    function handleSearch(query) {
      fetch(`/api/search?q=${query}`)
        .then(response => response.json())
        .then(data => setSearchResults(data.results))
        .catch(error => console.error(error));
    }
  
    return (
      <div className="app-container">
        <header className="header">
          <h1 className="logo">ShopCompare</h1>
          <nav className="navbar">
            <ul className="nav-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Categories</a></li>
              <li><a href="#">Brands</a></li>
              <li><a href="#">Deals</a></li>
              <li><a href="#">My Account</a></li>
            </ul>
            <SearchBar onSearch={handleSearch} />
            <SearchResults results={searchResults} />
          </nav>
        </header>
  
        <main className="main">
          {/* <CategoryList />
          <BrandList />
          <DealList /> */}
        </main>
  
        <Footer />
      </div>
    );
  }
  
  export default Homepage;
