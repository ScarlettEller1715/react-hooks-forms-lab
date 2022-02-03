import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormChange }) {
  
  const [name, setName] = useState("")
  const [category, setCategory] = useState("Produce")
 
  function handleSubmission(e) {
    e.preventDefault()
    onItemFormChange({
      id: uuid(),
      name: name,
      category: category
    })
  }
  
  return (
    <form className="NewItem" onSubmit= {(e) => {handleSubmission(e)}}>
      <label>
        Name:
        <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
      </label>

      <label>
        Category:
        <select name="category" onChange={(e) => setCategory(e.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
