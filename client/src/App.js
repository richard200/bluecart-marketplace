import React from "react";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import FilterBar from "./components/FilterBar";
import UserMenu from "./components/UserMenu";
import HistoryList from "./components/HistoryList";
// Import the Home component
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <UserMenu />
      // Render the Home component
      <Home />
      <SearchBar />
      <FilterBar />
      <ProductList />
      <HistoryList />
    </div>
  );
}

export default App;