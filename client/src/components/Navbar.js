import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { userLoginSuccess } from "../redux/Actions/userActions";
import About from "./About";
import '../App.css'
// import { Nav, NavDropdown } from 'react-bootstrap';

const Navbar = ({ user, setUser }) => {
  // Define a function to handle the logout
  const handleLogout = async () => {
    try {
      // Get the token from the local storage
    

      // Send a DELETE request to the Ruby backend with the token in the header
      const response = await fetch("https://bluecart-marketplace-backend.onrender.com/logout", {
        method: "DELETE",
       "Content-type": "application/json"
      });

      // Check if the response is successful
      if (response.ok) {
        // Dispatch an action to update the user state in the redux store
        setUser(null);

        // Remove the token from the local storage
     
      } else {
        // Throw an error with the status text
        throw new Error(response.statusText);
      }
    } catch (error) {
      // Display an error message
      alert(error.message);
    }
  };

  return (
    <div className="navbar">
     <h1 id="nav-title"><a  
      href="/">BlueCart!</a></h1>
      {user && <Link to="/history">History</Link>}
      {/* <Link to="/categories">Register</Link> */}
      <div className="dropdown">
    <a href="/categories">Categories</a>
    <div className="dropdown-menu">
      <a href="/phones">Phones</a>
      <a href="/games">Games</a>
    </div>
  </div>
  
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/about">About</Link>
      <Link to="/review">Review</Link>
    </div>
  );
  
};

// Map the state to props
const mapStateToProps = (state) => ({
  user: state.user.currentUser,
});

// Map the dispatch to props
const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(userLoginSuccess(user)),
});

// Connect the component to the redux store
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);