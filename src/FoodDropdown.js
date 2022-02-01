import React from 'react';

export default function FoodDropdown({ setFoodId }) {
  function handleChange(e) {
    setFoodId(e.target.value);
  }
  return <select onChange={handleChange}>
    <option value="1">Burrito</option>
    <option value="2">Sub</option>
    <option value="3">Cheeseburger</option>
  </select>;
}
