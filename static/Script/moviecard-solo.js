export async function showSoloMovie(movieData) {

    const movieContent = `
      <div class="moviedata__div">
        <div><h2>${movieData.attributes.title}</h2></div>
        <div><img src="${movieData.attributes.image.url}" alt="${movieData.attributes.title}" class="movie-modal__poster"></div>
        <div class="movie__description"><p><strong>Description:</strong> ${movieData.attributes.intro || 'No description available.'}</p></div>
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

