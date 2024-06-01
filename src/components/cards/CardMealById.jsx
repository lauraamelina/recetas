import React from "react";

export default function CardMealById({ meal }) {

    function getIngredientsWithMeasures(meal) {
        const ingredientsWithMeasures = [];

        for (let i = 1; i <= 20; i++) {
            const ingredientKey = `strIngredient${i}`;
            const measureKey = `strMeasure${i}`;

            const ingredient = meal[ingredientKey];
            const measure = meal[measureKey];

            if (ingredient && ingredient.trim() !== '') {
                ingredientsWithMeasures.push({
                    ingredient: ingredient,
                    measure: measure
                });
            }
        }

        return ingredientsWithMeasures;
    }
    return (
        <div className="mealById">
            <h2>{meal.strMeal}</h2>
            <p>Categoría: {meal.strCategory}</p>
            <p>Área: {meal.strArea}</p>
            <div className="ingredientes">
                <h3>Ingredients</h3>
                <ul>
                    {getIngredientsWithMeasures(meal).map((item, index) => (
                        <li key={index}>
                            {item.ingredient} {item.measure}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="instrucciones">
                <h3>Instrucciones</h3>
                <p>{meal.strInstructions}</p>
            </div>
            <div className="imagen">
                <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                />
            </div>
        </div>
    )
}