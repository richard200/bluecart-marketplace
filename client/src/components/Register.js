// import React, { useState } from "react";
// import { connect } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { loginUser } from "../redux/Actions/userActions";
// import {  userLoginSuccess } from "../redux/Actions/userActions";

// const Register = ({ userLoginSuccess }) => {
//   // Define the state for the email, password, and password confirmation
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordConfirmation, setPasswordConfirmation] = useState("");

//   // Use the useHistory hook to access the history object
//   const history = useNavigate();

//   // Define a function to handle the form submission
//   const handleSubmit = async (e) => {
//     // Prevent the default behavior of the form
//     e.preventDefault();

//     try {
//       // Send a POST request to the Ruby backend with the email, password, and password confirmation
//       const response = await fetch("/api/v1/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password, password_confirmation: passwordConfirmation }),
//       });

//       // Check if the response is successful
//       if (response.ok) {
//         // Parse the response as JSON
//         const data = await response.json();

//         // Get the user data and token from the data object
//         const { user, token } = data;

//         // Dispatch an action to update the user state in the redux store
//         loginUser (user);

//         // Save the token in the local storage
//         localStorage.setItem("token", token);

//         // Navigate to the home page
//         history.push("/");
//       } else {
//         // Throw an error with the status text
//         throw new Error(response.statusText);
//       }
//     } catch (error) {
//       // Display an error message
//       alert(error.message);
//     }
//   };

//   return (
//     <div className="register">
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <label htmlFor="passwordConfirmation">Password Confirmation:</label>
//         <input
//           type="password"
//           id="passwordConfirmation"
//           name="passwordConfirmation"
//           value={passwordConfirmation}
//           onChange={(e) => setPasswordConfirmation(e.target.value)}
//           required
//         />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// // Map the dispatch to props
// const mapDispatchToProps = (dispatch) => ({
//     userLoginSuccess: (user) => dispatch(userLoginSuccess(user)),
// });

// // Connect the component to the redux store
// export default connect(null, mapDispatchToProps)(Register);


import React, { useState } from 'react';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
      });
      const data = await response.json();
      console.log(data);
      window.location.href = '/login' // redirect to login page after successful registration
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Create an account</h2>
      <form onSubmit={handleSubmit}>
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Sign up</button>
      </form>
    </div>
  );
}

export default Signup;