import React from "react";

function InputSearch({ search, setSearch }) {
    return (
        <form>
            <input className="form-control search-input" type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Buscá tu receta favorita" />
        </form>
    )
}

export default InputSearch