import { fetchAPI } from "./fetch.js"
import { createMovies } from "./UI-movies.js"
/*
document.getElementById('header__children-movies').addEventListener('click', async function () {
  const movies = await fetchAPI() // Fetch movies
  if (movies) {
    // Filter PG-13 movies
    const pg13Movies = movies.filter((movie) => movie.ageLimit === 'PG-13')
    createMovies(pg13Movies) // Call the function to display PG-13 movies
  }
})
*/

document.getElementById('header__menu').addEventListener('click', async function () {
  const movies = await fetchAPI() // Fetch all movies
  if (movies) {
    createMovies(movies) // Call the function to display all movies
  }
})