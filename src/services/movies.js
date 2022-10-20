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

function getTopRatedMovies() {
  return fetch(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`
  ).then((response) => response.json());
}

function getUpcomingMovies() {
  return fetch(
    `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US`
  ).then((response) => response.json());
}

function getNowPlayingMovies() {
  return fetch(
    `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US`
  ).then((response) => response.json());
}

function getMovieDetails(id) {
  return fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  ).then((response) => response.json());
}

function getVideos(id) {
  return fetch(
    `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
  ).then((response) => response.json());
}

export {
  searchMovies,
  getGenres,
  getPopularMovies,
  getNowPlayingMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getVideos,
};
