/*
import { fetchAPI } from "./fetch.js"
import { loadFrontPageContent } from "./main.js"
import { showSoloMovie } from "./moviecard-solo.js"

export async function createMovies() {
  try {
    const movies = await fetchAPI()
    console.log('API Response:', movies) // Log the entire response


    if (!Array.isArray(movies) || movies.length === 0) {
      throw new Error('No movies found.')
    }
    
    const movieContainer = document.querySelector('.movie__wrapper')
    movieContainer.innerHTML = ''

    movies.forEach((movieData, i) => {
      
      const movieDOM = document.createElement('div')
      movieDOM.classList.add('movie')
      movieDOM.setAttribute('id', movieData.id)
      movieContainer.appendChild(movieDOM)

      const moviePoster = document.createElement('img')
      moviePoster.classList.add('movie__poster')
      const moviePosterURL = movieData.attributes.image.url
      moviePoster.setAttribute('src', moviePosterURL)
      movieDOM.appendChild(moviePoster)

      const movieTitle = document.createElement('h3')
      movieTitle.classList.add('movie__title')
      movieTitle.textContent = movieData.attributes.title
      movieDOM.appendChild(movieTitle)


      //Listener when clicking on a movie
      movieDOM.addEventListener('click', () => {
        console.log('Clicked movie:', movieData.attributes.title)
        showSoloMovie(movieData.attributes)
      })
    
    })
  } catch (error) {
    console.error('Error fetching or displaying movies:', error)
    const movieContainer = document.querySelector('.movie__wrapper')
    const errorMessage = document.createElement('div')
    errorMessage.classList.add('error-message')
    const frontPageContent = await loadFrontPageContent()
    errorMessage.innerHTML = frontPageContent.error.loadMovies
    movieContainer.appendChild(errorMessage)
  }
}

*/

/*
// Function to show modal
function showModal(movieData) {
  const modalContainer = document.querySelector('.movie-modal__container')

  if (!modalContainer) {
    console.error('Modal container not found!')
    return
  }

  //modal content
  const modalContent = `
    <div>
      <button class="movie-modal__close">×</button>
      <h2>${movieData.title}</h2>
      <img src="${movieData.image.url}" alt="${movieData.title}" class="movie-modal__poster">
      <p><strong>Description:</strong> ${movieData.intro || 'No description available.'}</p>
    </div>
  `
  modalContainer.innerHTML = modalContent
  modalContainer.classList.add('active')

  // Closing modal function
  document.querySelector('.movie-modal__close').addEventListener('click', () => {
    modalContainer.classList.remove('active')
  })
}
  */