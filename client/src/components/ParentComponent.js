import React, { useState } from "react";
import { FilterContextProvider } from "./FilterContextProvider";
import FilterBar from "./FilterBar";

function ParentComponent() {
  const [filterValue, setFilterValue] = useState("price");

  return (
    <FilterContextProvider filterValue={filterValue} setFilterValue={setFilterValue}>
      <FilterBar filterValue={filterValue} setFilterValue={setFilterValue} />
      {/* Rest of the component */}
    </FilterContextProvider>
  );
}

export default ParentComponent;
