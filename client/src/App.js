import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import { Provider } from "react-redux"; // Import Provider
import store from "./redux/store"; // Import store
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
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
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/history" element={<History />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;