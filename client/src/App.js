import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ProductDetails from "./components/ProductDetails";
import Login from "./components/Login";
import Register from "./components/Register";
import History from "./components/History";
import About from "./components/About"; // Import About component

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className="container">
          <Routes> // Wrap Route elements in Routes
            <Route exact path="/" element={<HomePage />} /> // Use element prop instead of children prop
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/history" element={<History />} />
            <Route path="/about" element={<About />} /> // Add Route for about page
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;