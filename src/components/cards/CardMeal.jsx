import React from "react";
import Button from '@mui/material/Button';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function CardMeal({ meal }) {
    return (
        <div className="meal">
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

                    <Button size="small" variant="outlined" color="success" startIcon={<VisibilityIcon />}>Ver más</Button>
                    <Button size="small" variant="contained" color="success" startIcon={<BookmarkIcon />} >Guardar</Button>
                </div>
            </div>
        </div>
    )
}
