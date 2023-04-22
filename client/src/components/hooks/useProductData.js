import { useState, useEffect } from 'react';
import axios from 'axios';

// A custom hook that fetches product data from an API
function useProductData(productId) {
  // Initialize the state variables
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Define the effect hook that runs once when the component mounts
  useEffect(() => {
    // Set the loading state to true
    setLoading(true);

    // Make a GET request to the API with the product ID
    axios.get(`https://example.com/api/products/${productId}`)
      .then(response => {
        // Set the product state to the data from the response
        setProduct(response.data);
      })
      .catch(error => {
        // Set the error state to the message from the error
        setError(error.message);
      })
      .finally(() => {
        // Set the loading state to false
        setLoading(false);
      });
  }, [productId]); // Only run the effect when the productId changes

  // Return the state variables as an object
  return { product, loading, error };
}

// Export the hook as a default export
export default useProductData;