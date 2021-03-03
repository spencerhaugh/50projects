const APIKEY = '7fef6ec9fa69f6dd72d019e77a6710f1';
const API_URI = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${APIKEY}`

const IMG_PATH = 'https://image.tmdb.org/t/p/w1200'
const SEARCH_URI = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query="`


const form = document.getElementById('form');
const search = document.getElementById('search');

// Load initail landing page movies
async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();

    console.log(data.results);
}

getMovies(API_URI);

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

