import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  getGenres,
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getVideos,
} from "../services/movies";
import { parseMovies } from "../utils";
import { modalReducer } from "./modalReducer";

const MovieContext = createContext();

export const useMovie = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [genres, setGenres] = useState({});
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  const [modal, dispatch] = useReducer(modalReducer, false);
  const [link, setLink] = useState("");

  useEffect(() => {
    getGenres().then((data) => {
      const genresObject = {};

      for (const genre of data.genres) {
        genresObject[genre.id] = genre.name;
      }

      setGenres(genresObject);
    });
    getPopularMovies().then((data) => {
      const movies = parseMovies(data.results, genres);
      setPopularMovies(movies);
    });
    getTopRatedMovies().then((data) => {
      const movies = parseMovies(data.results, genres);
      setTopRatedMovies(movies);
    });
    getUpcomingMovies().then((data) => {
      const movies = parseMovies(data.results, genres);
      setUpcomingMovies(movies);
    });
    getNowPlayingMovies().then((data) => {
      const movies = parseMovies(data.results, genres);
      setNowPlayingMovies(movies);
    });
  }, []);

  const watchVideo = (id) => {
    getVideos(id).then((data) => {
      const length = data.results.length;
      const irl = data.results[length - 1].key;
      setLink(irl);
      dispatch({ type: "openModal" });
    });
  };

  const value = {
    popularMovies,
    topRatedMovies,
    upcomingMovies,
    nowPlayingMovies,
    watchVideo,
    dispatch,
    modal,
    link,
  };
  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
