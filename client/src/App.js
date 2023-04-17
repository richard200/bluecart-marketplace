import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import SearchResults from './components/SearchResults';
import UserAccount from './components/UserAccount';
import About from './components/About';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<SearchBar />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/user-account" element={<UserAccount />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
