import React from "react";

function CardsMeals({ meals }) {
  return (
    <div className="meals">
      <ul>{meals && meals?.map((meal) =>

        <li>{meal.strMeal}</li>
      )}
      </ul>
    </div>
  );
}

export default CardsMeals;
