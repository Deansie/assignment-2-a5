export async function showSoloMovie(movieData) {

    // Function to show a single movie
    const soloMovieContainer = document.querySelector('.movie__wrapper__solo')
    const movieContainer = document.querySelector('.movie__wrapper')
    const returnButton = document.querySelector('.movie__wrapper__return')

    const movieContent = `
      <div>
        <h2>${movieData.title}</h2>
        <img src="${movieData.image.url}" alt="${movieData.title}" class="movie-modal__poster">
        <p><strong>Description:</strong> ${movieData.intro || 'No description available.'}</p>
      </div>
    `
    const returnButtonContent = `
        <div>
        <button class="movie__wrapper__return" type="button">Tillbaka</button>
        </div>
    `
    returnButton.innerHTML = returnButtonContent
    soloMovieContainer.innerHTML = movieContent
    soloMovieContainer.classList.add('active')
    movieContainer.classList.add('inactive')
    

    document.querySelector(".movie__wrapper__return").addEventListener('click', function () {
      soloMovieContainer.classList.remove('active')
      movieContainer.classList.remove('inactive')
      
    })
}