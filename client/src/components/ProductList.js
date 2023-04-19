import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, CardMedia, Grid, Typography } from "@material-ui/core";

function ProductList() {
  // Use state to store the products data
  const [products, setProducts] = useState([]);

  // Use effect to fetch the data from the backend
  useEffect(() => {
    // Make an HTTP request to the backend
    axios
      .get("/api/products")
      .then((response) => {
        // Set the products state to the response data
        setProducts(response.data);
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
  }, []); // Run only once when the component mounts

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              image={product.image}
              title={product.name}
              style={{ height: 200 }}
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                {product.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Price: {product.price}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Rating: {product.rating}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Delivery cost: {product.deliveryCost}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;