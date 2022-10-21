import { apiFetchMovies } from "./api-fetch";

const API_KEY = process.env["REACT_APP_API_KEY"];

function searchMovies(query) {
  return apiFetchMovies
    .post(`/search/movie?query=${query}&api_key=${API_KEY}`)
    .then((response) => response.data);
}

function getGenres() {
  return apiFetchMovies
    .get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`)
    .then((response) => response.data);
}

function getPopularMovies() {
  return apiFetchMovies
    .get(`/movie/popular?api_key=${API_KEY}&language=en-US`)
    .then((response) => response.data);
}

function getTopRatedMovies() {
  return apiFetchMovies
    .get(`/movie/top_rated?api_key=${API_KEY}&language=en-US`)
    .then((response) => response.data);
}

function getUpcomingMovies() {
  return apiFetchMovies
    .get(`/movie/upcoming?api_key=${API_KEY}&language=en-US`)
    .then((response) => response.data);
}

function getNowPlayingMovies() {
  return apiFetchMovies
    .get(`/movie/now_playing?api_key=${API_KEY}&language=en-US`)
    .then((response) => response.data);
}

function getMovieDetails(id) {
  return apiFetchMovies
    .get(`/movie/${id}?api_key=${API_KEY}&language=en-US`)
    .then((response) => response.data);
}

function getVideos(id) {
  return apiFetchMovies
    .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
    .then((response) => response.data);
}

export {
  searchMovies,
  getGenres,
  getPopularMovies,
  getNowPlayingMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getVideos,
  getMovieDetails,
};
