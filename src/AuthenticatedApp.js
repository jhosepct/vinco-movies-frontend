import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Button from "./components/Button";
import ListMovies from "./components/ListMovie";
import { useAuth } from "./context/UserContext";
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

  const { logout } = useAuth();

  return (
    <>
      <Button label="Logout" onClick={() => logout()} />

      <Routes>
        <Route path="/" element={<ListMovies movies={movies} />} />
        {/* <ListMovies movies={movies} /> */}
      </Routes>
    </>
  );
};
