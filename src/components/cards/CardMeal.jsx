import React, { useState } from "react";
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Link } from "react-router-dom";
import { isMealSaved, saveMeal, deleteMeal } from '../../services/recipeStorageService';

export default function CardMeal({ meal, updateSavedMeals }) {
    const [isSaved, setIsSaved] = useState(isMealSaved(meal));

    const handleSaveRecipe = () => {
        saveMeal(meal);
        setIsSaved(true);
        alert("Receta guardada correctamente!");
    };

    const handleDeleteRecipe = () => {
        deleteMeal(meal);
        setIsSaved(false);
        alert("Receta eliminada correctamente!");
    };

    return (
        <div className="meal" onClick={updateSavedMeals}>
            <div className="main">
                <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="image"
                />
                <div className="content">
                    <h2 className="title">
                        {meal.strMeal}
                    </h2>
                    <div className="details">
                        {meal.strArea} <br />
                        {meal.strCategory}
                    </div>
                </div>
                <div className="actions">
                    <Link to={'/receta/' + meal.idMeal}>
                        <Button size="small" variant="outlined" color="success" startIcon={<VisibilityIcon />}>Ver más</Button>
                    </Link>
                    {isSaved ? (
                        <Button size="small" variant="contained" color="success" startIcon={<BookmarkIcon />} onClick={handleDeleteRecipe}>Guardado</Button>
                    ) : (
                        <Button size="small" variant="contained" color="success" startIcon={< BookmarkBorderIcon />} onClick={handleSaveRecipe}>Guardar</Button>
                    )}
                </div>
            </div>
        </div>
    )
}
