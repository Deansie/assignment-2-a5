document.addEventListener('DOMContentLoaded', function() {

    const soloMovieContainer = document.querySelector('.movie__wrapper__solo');
    const movieContainer = document.querySelector('.movie__wrapper');
    const returnButton = document.querySelector('.movie__wrapper__return');

    console.log("Function is being called")

    if (movieContainer) {
    movieContainer.addEventListener('click', async function (event) {
    const movieCard = event.target.closest('.movie-card');
    
    if (!movieCard) return;

    const movieId = movieCard.dataset.movieId;
    if (!movieId) return;

    window.location.href = `/movies/${movieId}`;
    });
    }
    
    if (returnButton) {
    returnButton.addEventListener('click', function () {
        window.location.href = '/';
    })
    }
    
    window.addEventListener('popstate', function() {
    updateClasses();
    })
   
    updateClasses();
    window.addEventListener('hashchange', updateClasses);
    
    function updateClasses() {
    const isSoloMovie = document.body.classList.contains('solo-movie-page');

    if (soloMovieContainer) {
        soloMovieContainer.classList.toggle('active', isSoloMovie);
    }

    if (movieContainer) {
        movieContainer.classList.toggle('inactive', isSoloMovie);
    }

    if (returnButton) {
        returnButton.classList.toggle('active', isSoloMovie);
    }
    }
})


