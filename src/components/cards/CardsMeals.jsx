import React from "react";
import CardMeal from './CardMeal'

function CardsMeals({ meals }) {
  return (
    <div className="meals">
      <div className="bg">
        <p>EpicEats</p>
      </div>
      {meals && meals?.map((meal) =>
        <CardMeal meal={meal} key={meal.idMeal} />
      )}
    </div>
  );
}

export default CardsMeals;
