import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

function FilterBar({ filterValue, setFilterValue }) {
  // Use state to store the filter value
  const [filter, setFilter] = useState("price");

  // Handle the filter change event
  const handleChange = (e) => {
    // Set the filter state to the selected value
    setFilter(e.target.value);
    // Update the filter value in the parent component
    setFilterValue(e.target.value);
  };

  return (
    <FormControl>
      <InputLabel id="filter-label">Filter by</InputLabel>
      <Select
        labelId="filter-label"
        id="filter-select"
        value={filter}
        onChange={handleChange}
      >
        <MenuItem value="price">Price</MenuItem>
        <MenuItem value="rating">Rating</MenuItem>
        <MenuItem value="deliveryCost">Delivery cost</MenuItem>
      </Select>
    </FormControl>
  );
}

export default FilterBar;
