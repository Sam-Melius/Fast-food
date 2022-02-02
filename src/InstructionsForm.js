import React from 'react';
import { useState } from 'react/cjs/react.development';

export default function InstructionsForm({ addInstructions, setAddInstructions }) {
  const [instructionsInput, setInstructionsInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setAddInstructions([...addInstructions, instructionsInput]);
    setInstructionsInput('');
  }
  function handleChange(e) {
    setInstructionsInput(e.target.value);
  }

  return <div className='add-form'>
    <form onSubmit={handleSubmit}>
        Additional Instructions:
      <input value={instructionsInput} onChange={handleChange} />
      <button>Submit</button>
    </form>
  </div>;
}
