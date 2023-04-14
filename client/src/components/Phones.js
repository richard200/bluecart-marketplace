import React, { useState, useEffect } from 'react';

function PhoneList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchPhones() {
      const response = await fetch('http://localhost:3000/scrape');
     
      const data = await response.json();
      console.log(typeof data.jumia);
      setProducts(data.jumia);
      // console.log(setProducts);
    }
    fetchPhones();
  }, []);

  return (
    <div>
      <h1>Phone List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
           
          
          </tr>
        </thead>
        <tbody>
        { Array.isArray(products) && products.map((product, index) => (
        <tr key={index}>
          <td>{product.title}</td>
      
          <td>{product.price}</td>
        </tr>
      ))}
        </tbody>
      </table>
    </div>
  );
}

export default PhoneList;
