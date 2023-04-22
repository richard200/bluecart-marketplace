import React, { useState } from "react";

// Import the useNavigate hook
import { useNavigate } from "react-router-dom";

// Import the motion component from framer-motion
import { motion } from "framer-motion";

// Import the Navbar component


// Import the Search component
import Search from "./Search";

// Import the Carousel component
import Carousel from "./Carousel";

// Import the Categories component
import Categories from "./Categories";

// Import the Footer component
import Footer from "./Footer";

// Import the CSS file for styling
import "./Homepage.css";

const HomePage = () => {
  // Define the state for the query
  const [query, setQuery] = useState("");

  // Use the useNavigate hook to access the navigate function
  const navigate = useNavigate();

  // Define a function to handle the form submission
  const handleSubmit = (e) => {
    // Prevent the default behavior of the form
    e.preventDefault();

    // Navigate to the product list page with the query as a parameter
    navigate(`/products?query=${query}`); // Use the navigate function instead of history.push
  };

  // Define some variants for the motion component
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  // Return the JSX for the homepage with motion component and other components
  return (
    <motion.div
      className="home-page"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      {/* Render the Navbar component */}
      

      {/* Render the main content */}
      <div className="content">
        <h1>Welcome to BlueCart</h1>
        <p>The best place to compare prices from different e-commerce sites.</p>
        <form onSubmit={handleSubmit}>
          <Search query={query} setQuery={setQuery} />
          <button type="submit">Search</button>
        </form>

        {/* Render the Carousel component */}
        <Carousel />

        {/* Render the Categories component */}
        <Categories />
      </div>

      {/* Render the Footer component */}
      <Footer />
    </motion.div>
  );
};

export default HomePage;