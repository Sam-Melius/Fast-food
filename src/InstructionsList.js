import React from 'react';
import Instruction from './Instruction';

export default function InstructionsList({ addInstructions }) {
  return <div className='instructions'>
    <h3>Your Instructions:</h3>
    {addInstructions.map((instruction) => <Instruction key={instruction} instruction={instruction} />)}
  </div>;
}
