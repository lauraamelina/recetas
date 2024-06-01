const URL = 'https://www.themealdb.com/api/json/v1/1/'

async function getMealsByName(name) {
    return fetch(URL + 'search.php?s=' + name)
        .then(response => response.json())
}

async function getMealsByFirstLetter(letter) {
    return fetch(URL + 'search.php?f=' + letter)
        .then(response => response.json())
}

async function getMealById(id) {
    return fetch(URL + 'lookup.php?i=' + id)
        .then(response => response.json())
}

export {
    getMealsByName,
    getMealsByFirstLetter,
    getMealById
}