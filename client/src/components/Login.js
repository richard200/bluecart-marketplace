import React, { useState } from 'react';
import { Card, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import { Link} from 'react-router-dom';

// Import Tailwind CSS styles
import 'tailwindcss/tailwind.css';

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
          window.location.href = '/categories';
          props.onLogin();
       
        } else {
          // Display an error message to the user
        }
    
      })
      .catch(error => {
        setShowAlert('Invalid email or password');
        
      });
    };
 
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-8">
          <Card>
            <div className="card-header bg-green-800 text-white text-center text-xl font-bold">
              Login
            </div>
            <div className="card-body bg-gray-100 p-8">
              {showAlert && <Alert color="success">Logged in successfully!</Alert>}
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="email" className="text-gray-700">Username / Email</Label>
                  <Input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter your email or username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-green-500 w-full sm:w-auto"
                    
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password" className="text-gray-700">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </FormGroup>
      
                <Button type="submit" color="primary" className="w-full mt-4 py-3 rounded-md font-bold hover:bg-blue-600">Sign in</Button>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" name="remember" id="remember" />
                    Remember me
                  </Label>
                </FormGroup>
              </Form>
              <div className="flex justify-between items-center mt-4">
                <Link to="/register" className="text-green-500 hover:text-green-700">Not a member? Register</Link>
                <Link to="/forgot-password" className="text-blue-500 hover:underline">Forgot password?</Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Login;