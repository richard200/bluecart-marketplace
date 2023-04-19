import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import React, { Component } from 'react';

 import Reviews from './components/Reviews';
 import Main from './components/Router';
 import Progress from 'react-progress-2';
 
 class App extends Component {
 
   render() {
     return (
       <div>
         <Progress.Component
           style={{ background: '#dc3545' }}
           thumbStyle={{ background: '#dc3545' }}
         />
         <Main />
         <Reviews />
       </div>
     )
   }
 }
 
 export default App
