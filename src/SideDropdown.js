import React from 'react';

export default function SideDropdown({ setSideId }) {
  function handleChange(e) {
    setSideId(e.target.value);
  }
  return <select onChange={handleChange}>
    <option value="1">French Fries</option>
    <option value="2">Salad</option>
    <option value="3">Soup</option>
  </select>;
}
