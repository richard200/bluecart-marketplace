
import { Routes, Route, BrowserRouter, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Games from './components/Games';
import Phones from './components/Phones';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
    <div className="App">
  {/* <h1>My Phone Store</h1>
  <p className='open'>Look for and compare products based on price, 
    rating and find which store is best to visit for the product you are looking for</p>
    <br></br> */}
   
   <Switch>

      <Route path="/phones" component={Phones} />
      <Route path="/games" component={Games} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    
    
   
    </Switch>
     
   
    
   
    </div>
    </Router>
  
   
  );
}

export default App;
