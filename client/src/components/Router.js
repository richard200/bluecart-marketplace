import React from "react";
import { Routes, Route } from 'react-router-dom';
// import Products from "./components/Home/Product";
import Products from "./Home/Products";
import Trending from "./Trending/Trending";
import Trending_p from "./Trending/Trending_P";
import Shop from "./Shop/Shop";
import PhoneProduct from "./Home/PhoneProduct";
// import ShopIndex from "./Shop/Shop";
//import PhoneIndex from "./Shop/p                                                                                                                                                                                                                                              hone";
// import Results from "./results";
// import NotFound from ".components/404";
import Navigation from "./Navigation";
import Login from "./Login";
import SignUp from "./SignUp";
const Main = () => (
  <div className="con">
    <Navigation />
    <Routes>
      <Route exact path="/" component={Products} />
      <Route path="/Phone" component={PhoneProduct} />
      <Route path="/trending" component={Trending} />
      <Route path="/trending_p" component={Trending_p} />
      <Route exact path="/Searchresults" component={Results} />
      <Route path="/shop" component={Shop} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/:slug/all" component={ShopIndex} />
      <Route path="/:slug/phone" component={PhoneIndex} />
      <Route path="" component={NotFound} />
    </Routes>
  </div>
);
export default Main;