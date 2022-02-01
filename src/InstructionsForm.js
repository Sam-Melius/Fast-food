import React from 'react';
import { useState } from 'react/cjs/react.development';

export default function InstructionsForm({ addInstructions, setAddInstructions }) {
  const [instructionsInput, setInstructionsForm] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    addInstructions([...addInstructions, instructionsInput]);
    setAddInstructions('');
  }

  return <div>
    <form onSubmit={handleSubmit}>
        Additional Instructions:
      <input value={instructionsInput} onChange={e => setAddInstructions(e.target)} />
      <button>Submit</button>
    </form>
  </div>;
}
