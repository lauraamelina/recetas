const MEALS_KEY = 'saved_meals';

export function saveMeal(meal) {
  const existingMeals = JSON.parse(localStorage.getItem(MEALS_KEY)) || [];
  const isDuplicate = existingMeals.some(existingMeals => existingMeals.idMeal === meal.idMeal);

  if (!isDuplicate) {
    existingMeals.push(meal);
    localStorage.setItem(MEALS_KEY, JSON.stringify(existingMeals));
  }
}

export function deleteMeal(meal) {
  const savedMeals = JSON.parse(localStorage.getItem('saved_meals')) || [];
  const updatedRecipes = savedMeals.filter(savedRecipe => savedRecipe?.idMeal !== meal?.idMeal);
  localStorage.setItem('saved_meals', JSON.stringify(updatedRecipes));
}


export function getSavedMeals() {
  return JSON.parse(localStorage.getItem(MEALS_KEY)) || [];
}

export function clearSavedMeals() {
  localStorage.removeItem(MEALS_KEY);
}

export function isMealSaved(meal) {
  const savedMeals = JSON.parse(localStorage.getItem('saved_meals')) || [];
  for (let i = 0; i < savedMeals?.length; i++) {
    if (savedMeals[i]?.idMeal === meal?.idMeal) {
      return true;
    }
  }
  return false;
}


