import React, { useState, useEffect } from 'react';
import '../App.css'

function GameList() {
  const [products, setProducts] = useState([]);
  const [products1, setProducts1] = useState([]);
  const [products2, setProducts2] = useState([]);

  useEffect(() => {
    async function fetchPhones() {
      const response = await fetch('http://localhost:3000/scrape');
     
      const data = await response.json();
      // console.log(typeof data.kilimall);
       setProducts(data.jiji_games);
      setProducts1(data.jumia_game);
      // setProducts2(data.)
      // console.log(setProducts);
    }
    fetchPhones();
  }, []);

  return (
    <div>
      {/* <h1>Phone List</h1> */}
   
 
 

 <h1>Games from Jumia</h1>
{ Array.isArray(products1) && products1.map((product, index) => (
   
  <div className="card" key={index}>
   
    {/* <img className="card-img-top" src={product.image} alt={product.title} /> */}
    <div className="card-body">
    <img src={product.img} alt={product.title}/>
      <h3>Sold by Jumia</h3>
      <h5 className="card-title">Title: {product.title}</h5>
      <p className="card-text">Price: {product.price}</p>
      <a href={product.link} className="btn btn-primary">Go to Site</a>
      {/* <p className="card-text">Image: {product.img}</p> */}

    
    </div>
    </div>
 
))}

<br></br> 
 <br></br>
 <br></br>
 <br></br>
 <br></br>

 <h1>Games from Jiji</h1>
{ Array.isArray(products) && products.map((product, index) => (
   
  <div className="card" key={index}>
   
    {/* <img className="card-img-top" src={product.image} alt={product.title} /> */}
    <div className="card-body">
    <img src={product.img} alt={product.title}/>
      <h3>Sold by Jiji</h3>
      <h5 className="card-title">Title: {product.title}</h5>
      <p className="card-text">Price: {product.price}</p>
      <a href={product.link} className="btn btn-primary">Go to Site</a>
      {/* <p className="card-text">Image: {product.img}</p> */}

    
    </div>
    </div>
 
))}

    </div>
  );
}

export default GameList;
