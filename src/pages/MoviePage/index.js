import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import ListMovies from "../../components/ListMovie";
import { getGenres, getPopularMovies } from "../../services/movies";
import { parseMovies } from "../../utils";

const Collection = styled.div`
  margin-top: 40px;
  padding: 0 3%;
  position: relative;
`;

const ContentMovie = styled.div`
  position: relative;
  height: 376px;
`;

function MoviePage() {
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

  return (
    <>
      <Collection>
        <h1>Popular Movies</h1>
        <ContentMovie>
          <ListMovies movies={movies} type="row" />
        </ContentMovie>
      </Collection>

      <Collection>
        <h1>Top Rated Movies</h1>
        <ContentMovie>
          <ListMovies movies={movies} />
        </ContentMovie>
      </Collection>
      {/* <ListMovies movies={movies} /> */}
    </>
  );
}

export default MoviePage;
