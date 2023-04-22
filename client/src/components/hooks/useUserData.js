// This is a custom hook that fetches and returns the user data from an API
import { useState, useEffect } from 'react';
import axios from 'axios';

const useUserData = () => {
  // Define a state variable to store the user data
  const [userData, setUserData] = useState(null);

  // Define a state variable to store the loading status
  const [loading, setLoading] = useState(false);

  // Define a state variable to store the error message
  const [error, setError] = useState(null);

  // Define a function to fetch the user data from the API
  const fetchUserData = async () => {
    // Set the loading status to true
    setLoading(true);

    try {
      // Make a GET request to the API endpoint
      const response = await axios.get('https://example.com/api/user');

      // Check if the response status is OK
      if (response.status === 200) {
        // Set the user data to the response data
        setUserData(response.data);

        // Set the error message to null
        setError(null);
      } else {
        // Throw an error with the response status text
        throw new Error(response.statusText);
      }
    } catch (err) {
      // Set the user data to null
      setUserData(null);

      // Set the error message to the error message
      setError(err.message);
    } finally {
      // Set the loading status to false
      setLoading(false);
    }
  };

  // Use useEffect hook to fetch the user data when the component mounts
  useEffect(() => {
    fetchUserData();
  }, []);

  // Return the user data, loading status and error message as an object
  return { userData, loading, error };
};

export default useUserData;