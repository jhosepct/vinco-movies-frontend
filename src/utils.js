export function parseMovies(movies, genres) {
  return movies.map((movie) => parseMovie(movie, genres));
}

export function parseMovie(movie, genres) {
  const {
    id,
    title,
    release_date,
    vote_average,
    overview,
    poster_path,
    genre_ids,
  } = movie;
  //api.themoviedb.org/3/movie/62e5ca6cfc5f060059c2f61a/watch/providers?api_key=d0e635bd8e7d8acfef880d00cc231400
  https: return {
    id,
    title,
    year: release_date.substr(0, 4),
    vote_average,
    overview,
    poster: `https://image.tmdb.org/t/p/w200${poster_path}`,
    genres: genre_ids.map((id) => genres[id]),
  };
}
