
import React, { useState } from "react";
import { connect } from "react-redux";
import { filterProducts } from "../redux/actions/productActions";

const Filter = ({ products, filterProducts }) => {
  // Define the initial state for the filters
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(1000);
  const [category, setCategory] = useState("all");
  const [rating, setRating] = useState(0);

  // Define a function to handle the change of the filters
  const handleChange = (e) => {
    // Get the name and value of the input
    const { name, value } = e.target;

    // Update the state according to the input name
    switch (name) {
      case "priceMin":
        setPriceMin(value);
        break;
      case "priceMax":
        setPriceMax(value);
        break;
      case "category":
        setCategory(value);
        break;
      case "rating":
        setRating(value);
        break;
      default:
        break;
    }

    // Dispatch an action to filter the products based on the current state
    filterProducts(products, {
      priceMin,
      priceMax,
      category,
      rating,
    });
  };

  return (
    <div className="filter">
      <h3>Filter by:</h3>
      <div className="filter-price">
        <label htmlFor="priceMin">Price Min:</label>
        <input
          type="number"
          id="priceMin"
          name="priceMin"
          value={priceMin}
          onChange={handleChange}
        />
        <label htmlFor="priceMax">Price Max:</label>
        <input
          type="number"
          id="priceMax"
          name="priceMax"
          value={priceMax}
          onChange={handleChange}
        />
      </div>
      <div className="filter-category">
        <label htmlFor="category">Category:</label>
        <select id="category" name="category" value={category} onChange={handleChange}>
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="books">Books</option>
          <option value="toys">Toys</option>
        </select>
      </div>
      <div className="filter-rating">
        <label htmlFor="rating">Rating:</label>
        <select id="rating" name="rating" value={rating} onChange={handleChange}>
          <option value="0">All</option>
          <option value="1">1 Star & Up</option>
          <option value="2">2 Stars & Up</option>
          <option value="3">3 Stars & Up</option>
          <option value="4">4 Stars & Up</option>
          <option value="5">5 Stars</option>
        </select>
      </div>
    </div>
  );
};

// Map the state to props
const mapStateToProps = (state) => ({
  products: state.products.items,
});

// Map the dispatch to props
const mapDispatchToProps = (dispatch) => ({
  filterProducts: (products, filters) => dispatch(filterProducts(products, filters)),
});

// Connect the component to the redux store
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
