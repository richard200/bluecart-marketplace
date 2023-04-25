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
    // Check if the product ID is valid
    if (productId) {
      // Set the loading state to true
      setLoading(true);

      // Make a GET request to the API with the product ID
      axios.get(`http://localhost:3000/scrape/${productId}`)
        .then(response => {
          // Check if the response data is valid
          if (response.data && response.data.product) {
            // Set the product state to the data from the response
            setProduct(response.data.product);
          } else {
            // Set the error state to a custom message
            setError("No product data found");
          }
        })
        .catch(error => {
          // Set the error state to the message from the error
          setError(error.message);
        })
        .finally(() => {
          // Set the loading state to false
          setLoading(false);
        });
    } else {
      // Set the product state to null
      setProduct(null);
    }
  }, [productId]); // Only run the effect when the productId changes

  // Return the state variables as an object
  return { product, loading, error };
}

// Export the hook as a default export
export default useProductData;