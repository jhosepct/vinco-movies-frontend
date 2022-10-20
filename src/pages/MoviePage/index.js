import ListMovies from "../../components/ListMovie";
import { useMovie } from "../../context/MovieContext";

import * as Styled from "./styles";

function MoviePage() {
  const { popularMovies, topRatedMovies, upcomingMovies, nowPlayingMovies } =
    useMovie();

  return (
    <>
      {popularMovies.length === 0 ? null : (
        <Styled.Collection>
          <h1>Popular Movies</h1>
          <Styled.ContentMovie>
            <ListMovies movies={popularMovies} type="row" />
          </Styled.ContentMovie>
        </Styled.Collection>
      )}

      {topRatedMovies.length === 0 ? null : (
        <Styled.Collection>
          <h1>Top Rated Movies</h1>
          <Styled.ContentMovie>
            <ListMovies movies={topRatedMovies} type="row" />
          </Styled.ContentMovie>
        </Styled.Collection>
      )}

      {upcomingMovies.length === 0 ? null : (
        <Styled.Collection>
          <h1>Upcoming movies</h1>
          <Styled.ContentMovie>
            <ListMovies movies={upcomingMovies} type="row" />
          </Styled.ContentMovie>
        </Styled.Collection>
      )}

      {nowPlayingMovies.length === 0 ? null : (
        <Styled.Collection>
          <h1>Now Playing Movies</h1>
          <Styled.ContentMovie>
            <ListMovies movies={nowPlayingMovies} type="row" />
          </Styled.ContentMovie>
        </Styled.Collection>
      )}
    </>
  );
}

export default MoviePage;
