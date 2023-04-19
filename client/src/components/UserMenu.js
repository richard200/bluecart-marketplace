import React, { useState, useRef } from "react";
import axios from "axios";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@material-ui/core";

function UserMenu() {
  // Use state to store the dialog open status
  const [open, setOpen] = useState(false);
  // Use state to store the username and password inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // Use ref to access the form element
  const formRef = useRef();

  // Handle the dialog open event
  const handleOpen = () => {
    // Set the open state to true
    setOpen(true);
  };

  // Handle the dialog close event
  const handleClose = () => {
    // Set the open state to false
    setOpen(false);
    // Clear the username and password inputs
    setUsername("");
    setPassword("");
  };

  // Handle the username input change event
  const handleUsernameChange = (e) => {
    // Set the username state to the input value
    setUsername(e.target.value);
  };

  // Handle the password input change event
  const handlePasswordChange = (e) => {
    // Set the password state to the input value
    setPassword(e.target.value);
  };

  // Handle the form submit event
  const handleSubmit = (e) => {
    // Prevent the default browser behavior
    e.preventDefault();
    // Make an HTTP request to the backend with the username and password as parameters
    axios
      .post("/api/login", { username, password })
      .then((response) => {
        // Do something with the response data
        console.log(response.data);
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
    // Close the dialog
    handleClose();
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Log in / Sign up
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Log in / Sign up</DialogTitle>
        <DialogContent>
          <form ref={formRef} onSubmit={handleSubmit}>
            <TextField
              label="Username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button type="submit" form={formRef.current} color="primary">
            Submit
          </Button>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default UserMenu;