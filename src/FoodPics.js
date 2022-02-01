import React from 'react';

export default function FoodPics({ foodId, drinkId, sideId }) {
  return <div>
    <img src={`food-${foodId}.webp`} />
    <img src={`drink-${drinkId}.webp`} />
    <img src={`side-${sideId}.webp`} />
  </div>;
}
