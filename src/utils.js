export function parseMovies(movies, genres) {
  return movies.map((movie) => parseMovie(movie, genres));
}

export function parseMovie(movie, genres) {
  const {
    title,
    release_date,
    vote_average,
    overview,
    poster_path,
    genre_ids,
  } = movie;
  return {
    title,
    year: release_date.substr(0, 4),
    vote_average,
    overview,
    poster: `https://image.tmdb.org/t/p/w200${poster_path}`,
    genres: genre_ids.map((id) => genres[id]),
  };
}
