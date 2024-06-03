import React, { useState } from "react";
import { getSavedMeals } from '../services/recipeStorageService'
import Pagination from "../components/pagination/Pagination";
import CardsMeals from "../components/cards/CardsMeals";
import { Link } from "react-router-dom";

export default function PageMealSaved() {
    const [meals, setMeals] = useState(getSavedMeals())
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = (meals || []).slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const updateSavedMeals = () => {
        setMeals(getSavedMeals());
    };

    return (
        <main>
            <h1>EpicEats</h1>
            <p>Guardados</p>
            <nav className="menuSaved">
                <Link to=".." className="btn btn-secondary">Volver</Link>
            </nav>
            <CardsMeals meals={currentItems} updateSavedMeals={updateSavedMeals} />
            {meals.length > itemsPerPage &&
                <Pagination
                    itemsPerPage={itemsPerPage}
                    totalItems={meals ? meals.length : 0}
                    currentPage={currentPage}
                    paginate={paginate}
                />
            }
            {meals.length === 0 &&
                <p className="my-5 fs-4">No hay recetas guardadas</p>
            }
        </main>
    )
}