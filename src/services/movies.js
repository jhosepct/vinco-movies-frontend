const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env["REACT_APP_API_KEY"];

function searchMovies(query) {
  return fetch(
    `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`
  ).then((response) => response.json());
}

function getGenres() {
  return fetch(
    `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
  ).then((response) => response.json());
}

function getPopularMovies() {
  return fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US`
  ).then((response) => response.json());
}

export { searchMovies, getGenres, getPopularMovies };
