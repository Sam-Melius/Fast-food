import React from 'react';

export default function NameInput({ setOrderName }) {
  function handleChange(e) {
    setOrderName(e.target.value);
  }
  return <div className='name'>
      Name for order:
    <input onChange={handleChange} />
  </div>;
}
