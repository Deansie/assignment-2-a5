const API = 'https://plankton-app-xhkom.ondigitalocean.app/api/movies'

export async function fetchAPI() {
  try {
    const response = await fetch(`${API}`);
    if (!response.ok) {
      throw new Error(`Error! Status: ${response.status}`);
    }
    const apiMovies = await response.json();
    return apiMovies.data;
  } catch (error) {
    console.error('Error fetching movies', error);
    throw error;
  }
}

export async function fetchMovie(id) {
  try {
    const response = await fetch(`${API}/${id}`);
    if (!response.ok) {
      throw new Error(`Error! Status: ${response.status}`);
    }
    const apiMovies = await response.json();
    return apiMovies.data;
  } catch (error) {
    console.error('Error fetching movies', error);
    throw error;
  }
}