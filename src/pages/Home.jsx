import React, { useEffect, useState } from "react";
import Search from "../components/Search.jsx";
import CardsMeals from "../components/CardsMeals.jsx";
import * as MealService from "../services/meal.service";

export default function Home() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (search !== "") {
      MealService.getMealsByName(search).then((response) =>
        setResults(response.meals)
      );
    } else {
      MealService.getMealsByFirstLetter("a").then((response) =>
        setResults(response.meals)
      );
    }
  }, [search]);

  return (
    <main>
      <h1>EpicEats</h1>
      <Search search={search} setSearch={setSearch} />
      <CardsMeals meals={results} />
    </main>
  );
}
