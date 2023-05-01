// 





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
          window.location.href = '/categories';
          props.onLogin();
       
        } else {
      
        }
    
      })
      .catch(error => {
        setShowAlert('Invalid email or password');
        
      });
    };


  return (
    <div className="container mt-5">
       <h2 className="mb-4">Login to your account</h2>
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
                  <Label for="email">Email</Label>
                  <Input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
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
              <Link to="/register" color="secondary">
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