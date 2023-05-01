import React from "react";
import { useState, } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import { Provider } from "react-redux"; // Import Provider
import store from "./redux/store"; // Import store
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
import Login from "./components/Login";
import Register from "./components/Register";
import Categories from "./components/Categories";
import History from "./components/History";
import About from "./components/About"; // Import About component
import Phones from "./components/Phones"; // Import Phones component
import Review from "./components/Review";
import LogoutButton from "./components/Logout";
function App() {

  // const [loggedIn, setLoggedIn] = useState(true);

  // function handleLogoutClick() {
  //   fetch('/logout', {
  //     method: 'DELETE',
  //   })
  //   .then(response => {
  //     if (response.ok) {
  //       sessionStorage.clear();
  //       setLoggedIn(false);
  //     } else {
  //       console.error('Failed to log out');
  //     }
  //   })
  //   .catch(error => console.error(error));
  // }
  return (
    <Provider store={store}> 

{/* {loggedIn ? (
        <div>
        
          <LogoutButton onClick={handleLogoutClick} />
        </div>
      ) : (
        <p>You are logged out.</p>,
        window.location.href = '/'
        
      )} */}
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/games" element={<Categories />} />
            <Route path="/phones" element={<Phones />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/register" element={<Register />} />
            <Route path="/history" element={<History />} />
            <Route path="/about" element={<About />} />
            <Route path="/review" element={<Review />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;