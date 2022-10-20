import { useMovie } from "../../context/MovieContext";

import FrameYoutube from "../../components/FrameYoutube";

import { RiCloseLine } from "react-icons/ri";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import SectionMovie from "./section-movie";

const Modal = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 100;
`;

function MoviePage() {
  const { popularMovies, topRatedMovies, upcomingMovies, nowPlayingMovies } =
    useMovie();

  const movies = [
    { name: "Movies", movies: popularMovies },
    { name: "Top Rated", movies: topRatedMovies },
    { name: "Upcoming", movies: upcomingMovies },
    { name: "Now Playing", movies: nowPlayingMovies },
  ];

  const { dispatch, modal, link } = useMovie();
  return (
    <div>
      {modal && (
        <Modal>
          <div
            className={css`
              display: flex;
              flex-direction: column;
            `}
          >
            <RiCloseLine
              size={25}
              className={css`
                align-self: flex-end;
                cursor: pointer;
              `}
              onClick={() => dispatch({ type: "closeModal" })}
            />
            <FrameYoutube link={link} />
          </div>
        </Modal>
      )}

      {Object.keys(movies).map(
        (key) => console.log(movies)
        // <SectionMovie key={key} sectionMovies={movies[key]} type="row" />
      )}

      {movies.map((movie, id) => (
        <SectionMovie
          sectionMovies={movie.movies}
          title={movie.name}
          type="row"
        />
      ))}

      <SectionMovie title="Popular movies" sectionMovies={popularMovies} />
      <SectionMovie title="Popular movies" sectionMovies={popularMovies} />
    </div>
  );
}

export default MoviePage;
