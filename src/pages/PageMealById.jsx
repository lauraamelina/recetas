import React, { useEffect, useState } from "react";
import * as MealService from "../services/meal.service.js";
import { useParams } from "react-router-dom";
import CardMealById from '../components/cards/CardMealById.jsx'
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function PageMealById() {
  const [meal, setMeal] = useState(null);
  const { id } = useParams()

  useEffect(() => {
    MealService.getMealById(id).then((response) => {
      if (response && response.meals && response?.meals?.length > 0) {
        setMeal(response.meals[0]);
      } else {
        setMeal(null);
      }
    });
  }, [id]);

  useEffect(() => {
    console.log(meal)
  }, [meal])

  return (
    <main>
      <h1 className="visually-hidden">EpicEats</h1>
      {meal ? (
        <CardMealById meal={meal} />
      ) : (
        <p className="my-5 fs-2">No se encontró la receta</p>
      )}

      <Link to={'/'}>
        <Button size="small" variant="contained" color="success">Volver</Button>
      </Link>

    </main>
  );
}
