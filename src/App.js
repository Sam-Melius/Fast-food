
import { useState } from 'react';
import './App.css';
import FoodPics from './FoodPics';

function App() {
  const [foodId, setFoodId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [sideId, setSideId] = useState(1);

  return (
    <div className="App">
      <div>
        <h1>Order for </h1>
        <FoodPics 
          foodId={foodId}
          drinkId={drinkId}
          sideId={sideId} />
      </div>
      
      
    </div>
  );
}

export default App;
