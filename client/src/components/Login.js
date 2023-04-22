import React, { useState } from "react";
import { connect } from "react-redux";
import {useNavigate } from "react-router-dom";
import {  userLoginSuccess } from "../redux/Actions/userActions";

const Login = ({  userLoginSuccess }) => {
  // Define the state for the email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Use the useHistory hook to access the history object
  const history = useNavigate();

  // Define a function to handle the form submission
  const handleSubmit = async (e) => {
    // Prevent the default behavior of the form
    e.preventDefault();

    try {
      // Send a POST request to the Ruby backend with the email and password
      const response = await fetch("/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      // Check if the response is successful
      if (response.ok) {
        // Parse the response as JSON
        const data = await response.json();

        // Get the user data and token from the data object
        const { user, token } = data;

        // Dispatch an action to update the user state in the redux store
        userLoginSuccess(user);

        // Save the token in the local storage
        localStorage.setItem("token", token);

        // Navigate to the home page
        history.push("/");
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
    <div className="login">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

// Map the dispatch to props
const mapDispatchToProps = (dispatch) => ({
    userLoginSuccess: (user) => dispatch( userLoginSuccess(user)),
});

// Connect the component to the redux store
export default connect(null, mapDispatchToProps)(Login);
