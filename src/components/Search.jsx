import React from "react";

function Search ({search, setSearch}) {
    return(
        <form>
            <input className="form-control" type="text" value={search}  onChange={(e) => setSearch(e.target.value)} />
            <p>{search}</p>
        </form>
    )
}

export default Search