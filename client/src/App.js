import React from "react";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import FilterBar from "./components/FilterBar";


import HistoryList from "./components/HistoryList";

// Import the Home component
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Home />
      
      <ProductList />
      <HistoryList />
    </div>
  );
}

export default App;