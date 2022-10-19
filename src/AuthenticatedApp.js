import { useEffect, useState } from "react";
import ListMovies from "./components/ListMovie";
import { getGenres, getPopularMovies } from "./services/movies";
import { parseMovies } from "./utils";

export const AuthenticatedApp = () => {
  const [genres, setGenres] = useState({});
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getGenres().then((data) => {
      const genresObject = {};

      for (const genre of data.genres) {
        genresObject[genre.id] = genre.name;
      }

      setGenres(genresObject);
    });
  }, []);
  useEffect(() => {
    getPopularMovies().then((data) => {
      const movies = parseMovies(data.results, genres);
      setMovies(movies);
    });
  }, [genres]);

  return <ListMovies movies={movies} />;
};
