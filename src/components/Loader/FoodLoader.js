import React from "react";
import "./FoodLoader.css"; // Import the CSS for the animation

function FoodLoader(){
  return (
    <div className="food-loader">
      <div className="food-item">🍕</div>
      <div className="food-item">🍔</div>
      <div className="food-item">🍟</div>
      <div className="food-item">🍩</div>
      <div className="food-item">🍣</div>
    </div>
  );
};

export default FoodLoader;
