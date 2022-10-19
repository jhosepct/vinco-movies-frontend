import { useEffect, useState } from "react";
import ListMovies from "./components/ListMovie";
import { LoginPage } from "./pages/LoginPage";
import { getGenres, getPopularMovies } from "./services/movies";
import { parseMovies } from "./utils";

function App() {
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
  }, []);
  return (
    <>
      <LoginPage />
      <ListMovies movies={movies} />
    </>
  );
}

export default App;
