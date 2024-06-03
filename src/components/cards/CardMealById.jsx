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
        <div className="mealById conteiner">
            <h2 className="visually-hidden">{meal.strMeal}</h2>
            <div className="mealContent row">
                <div className="info col-md-8">
                    <p className="title">{meal.strMeal}</p>
                    <p className="badge bg-secondary">{meal.strCategory}</p>
                    <p className="badge bg-secondary">{meal.strArea}</p>
                    <div className="row">
                        <div className="ingredientes col-md-3">
                            <h3>Ingredientes</h3>
                            <ul>
                                {getIngredientsWithMeasures(meal).map((item, index) => (
                                    <li key={index}>
                                        <span className="fw-bold">{item.ingredient} </span>
                                        {item.measure}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="instrucciones col-md-8">
                            <h3>Instrucciones</h3>
                            <p>{meal.strInstructions}</p>
                        </div>
                    </div>
                </div>
                <div className="imagen col-md-4">
                    <img
                        src={meal.strMealThumb}
                        alt={meal.strMeal}
                    />
                </div>
            </div>
        </div>
    )
}