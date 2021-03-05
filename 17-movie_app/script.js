const APIKEY = '7fef6ec9fa69f6dd72d019e77a6710f1';
const API_URI = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${APIKEY}`

const IMG_PATH = 'https://image.tmdb.org/t/p/w500'
const SEARCH_URI = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query="`


const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

// Get movies:
getMovies(API_URI);

// Load initial landing page movies
async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();

    showMovies(data.results);
}

function showMovies(movies) {
    main.innerHTML = '';
    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        `
        main.appendChild(movieEl);
    });
};

function getClassByRate(vote) {
    if (vote >= 8) return 'green';
    else if (vote >= 5) return 'orange';
    else return 'red';
}


// Search bar functionality
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if(searchTerm && searchTerm != '') {
        getMovies(SEARCH_URI + searchTerm)
    
        search.value = '';
    } else {
        window.location.reload();
    }

})

