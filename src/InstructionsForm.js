import React from 'react';
import { useState } from 'react/cjs/react.development';

export default function InstructionsForm({ addInstructions, setAddInstructions }) {
  const [instructionsInput, setInstructionsInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setAddInstructions([...addInstructions, instructionsInput]);
    setInstructionsInput('');
  }

  return <div>
    <form onSubmit={handleSubmit}>
        Additional Instructions:
      <input value={instructionsInput} onChange={e => setInstructionsInput(e.target.value)} />
      <button>Submit</button>
    </form>
  </div>;
}
