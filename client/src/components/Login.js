



import React, { useState } from 'react';
import { Card, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import { Link} from 'react-router-dom';


function Login (props ) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

       // Send a POST request to login and create a session
       fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Login failed');
        }
      })
      .then(data => {
        if (data.user_id) {
          sessionStorage.setItem('userId', data.user_id);
          window.location.href = 'http://localhost:3000/phones';
          props.onLogin();
       
        } else {
          // Display an error message to the user
        }
      //   sessionStorage.setItem('userId', data.user_id);
      //   // Call the onLogin callback with the user ID
      //  props.onLogin()
      //  window.location.href = '/addrecipe';
      })
      .catch(error => {
        setShowAlert('Invalid email or password');
        
      });
    };
  //   try {
  //     const response = await fetch('/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ email, password }),
  //     });
  //     const data = await response.json();
  //     console.log(data); // handle server response here
  //     if (data) {
  //       setShowAlert(true); // show success message
  //       onLogin(data.user_id);
  //       // you can store the token in local storage or cookies here
  //       window.location.href = '/addrecipe'; // redirect to home page after successful login
        
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-8">
          <Card>
            <div className="card-header">
              Login
            </div>
            <div className="card-body">
              {showAlert && <Alert color="success">Logged in successfully!</Alert>}
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="email">Username / Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email or username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>
                <Button type="submit" color="primary" className='btn-log'>
                  Login
                </Button>
              </Form>
            </div>
            <div className="card-footer text-center">
              <div className="mb-3">Don't have an account?</div>
              <Link to="/signup" color="secondary">
                Go to Register
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;