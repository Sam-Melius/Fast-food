
import { useState } from 'react';
import './App.css';
import FoodPics from './FoodPics';
import FoodDropdown from './FoodDropdown';
import DrinkDropdown from './DrinkDropdown';
import SideDropdown from './SideDropdown';
import NameInput from './NameInput';
import InstructionsForm from './InstructionsForm';
import InstructionsList from './InstructionsList';



function App() {
  const [foodId, setFoodId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [orderName, setOrderName] = useState('Dude');
  const [addInstructions, setAddInstructions] = useState(['All the bacon you have', 'No anchovies, if there is one anchovy i swear... ']);

  return (
    <div className="App">
      <div className='order'>
        <h1>Order for {orderName}</h1>
        <FoodPics 
          foodId={foodId}
          drinkId={drinkId}
          sideId={sideId} />
      </div>
      <div className='menu'>Menu:
        <FoodDropdown setFoodId={setFoodId} />
        <DrinkDropdown setDrinkId={setDrinkId} />
        <SideDropdown setSideId={setSideId} /> 
      </div>
      <div>
        <NameInput setOrderName={setOrderName} />
        <InstructionsForm addInstructions={addInstructions} setAddInstructions={setAddInstructions} />
        <InstructionsList addInstructions={addInstructions} />
      </div>
      
      
    </div>
  );
}

export default App;
