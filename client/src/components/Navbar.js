import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { userLoginSuccess } from "../redux/Actions/userActions";

const Navbar = ({ user, setUser }) => {
  // Define a function to handle the logout
  const handleLogout = async () => {
    try {
      // Get the token from the local storage
      const token = localStorage.getItem("token");

      // Send a DELETE request to the Ruby backend with the token in the header
      const response = await fetch("/api/v1/logout", {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Check if the response is successful
      if (response.ok) {
        // Dispatch an action to update the user state in the redux store
        setUser(null);

        // Remove the token from the local storage
        localStorage.removeItem("token");
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
      <Link to="/">Home</Link>
      {user && <Link to="/history">History</Link>}
      {user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <Link to="/register">Register</Link>
      )}
      
        <Link to="/login">Login</Link>
      
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