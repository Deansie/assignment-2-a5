export async function showSoloMovie(movieData) {

    const movieContent = `
      <div class="moviedata__div">
        <div><h2>${movieData.title}</h2></div>
        <div><img src="${movieData.image.url}" alt="${movieData.title}" class="movie-modal__poster"></div>
        <div class="movie__description"><p><strong>Description:</strong> ${movieData.intro || 'No description available.'}</p></div>
      </div>
    `
    const returnButtonContent = `
        <div>
        <button class="movie__wrapper__returnbutton" type="button">Tillbaka</button>
        </div>
        `;
    
    return {
        movieContent,
        returnButtonContent
    };
}