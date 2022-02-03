import React from "react";

function Filter({ onCategoryChange, handleSearchBar }) {
  
  function formFilter(e) {
    return (
      handleSearchBar(e)
    )
  }
  
  return (
    <div className="Filter" >
      <input type="text" name="search" placeholder="Search..." onChange={(e) => {formFilter(e)}}/>
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
