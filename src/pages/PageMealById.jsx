import React, { useEffect, useState } from "react";
import * as MealService from "../services/meal.service.js";
import { useParams } from "react-router-dom";
import CardMealById from '../components/cards/CardMealById.jsx';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

function GradientCircularProgress() {
  return (
    <React.Fragment>
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a3e4db" />
            <stop offset="100%" stopColor="#00aaff" />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgress sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} />
    </React.Fragment>
  );
}

export default function PageMealById() {
  const [meal, setMeal] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    MealService.getMealById(id).then((response) => {
      if (response && response.meals && response?.meals?.length > 0) {
        setMeal(response.meals[0]);
      } else {
        setMeal(null);
      }
      setLoading(false);
    });
  }, [id]);

  return (
    <main>
      <h1 className="visually-hidden">EpicEats</h1>
      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <GradientCircularProgress />
        </Box>
      )}
      {!loading && meal ? (
        <CardMealById meal={meal} />
      ) : (
        !loading && <p className="my-5 fs-2">No se encontró la receta</p>
      )}
      <Link to={'/'}>
        <Button size="small" variant="contained" color="success">Volver</Button>
      </Link>
    </main>
  );
}
