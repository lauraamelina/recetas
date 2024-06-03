import React, { useEffect, useState } from "react";
import Search from "../components/inputs/InputSearch.jsx";
import CardsMeals from "../components/cards/CardsMeals.jsx";
import * as MealService from "../services/meal.service";
import Pagination from "../components/pagination/Pagination.jsx";
import { Link } from "react-router-dom";

export default function Home() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    if (search !== "") {
      MealService.getMealsByName(search).then((response) =>
        setResults(response.meals || [])
      );
    } else if (search === '') {
      MealService.getMealsByFirstLetter("a").then((response) =>
        setResults(response.meals || [])
      );
    }
  }, [search]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = (results || []).slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <main>
      <h1>EpicEats</h1>
      <p className="mt-0 small">Explora un Universo de Sabores</p>
      <nav className="menuSaved">
        <Link to="/recetas/guardados" className="btn btn-success">Guardados</Link>
      </nav>
      <Search search={search} setSearch={setSearch} />
      <CardsMeals meals={currentItems} />
      {results.length > itemsPerPage &&
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={results ? results.length : 0}
          currentPage={currentPage}
          paginate={paginate}
        />
      }
    </main>
  );
}
