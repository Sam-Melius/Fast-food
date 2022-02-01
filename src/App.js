
import { useState } from 'react';
import './App.css';
import FoodPics from './FoodPics';
import FoodDropdown from './FoodDropdown';
import DrinkDropdown from './DrinkDropdown';
import SideDropdown from './SideDropdown';
import NameInput from './NameInput';


function App() {
  const [foodId, setFoodId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [orderName, setOrderName] = useState('dude');
  const [addInstructions, setAddInstructions] = useState(['All the bacon you have', 'no anchovies, if there is one anchovy i swear... ']);

  return (
    <div className="App">
      <div>
        <h1>Order for {orderName}</h1>
        <FoodPics 
          foodId={foodId}
          drinkId={drinkId}
          sideId={sideId} />
      </div>
      <div>
        <FoodDropdown setFoodId={setFoodId} />
        <DrinkDropdown setDrinkId={setDrinkId} />
        <SideDropdown setSideId={setSideId} />
        <NameInput setOrderName={setOrderName} />
        <InstructionsForm addInstructions={addInstructions} setAddInstructions={setAddInstructions} />
        
      </div>
      
      
    </div>
  );
}

export default App;
