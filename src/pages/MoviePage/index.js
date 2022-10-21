import { useMovie } from "../../context/MovieContext";

import FrameYoutube from "../../components/FrameYoutube";

import styled from "@emotion/styled";
import SectionMovie from "./section-movie";
import Button from "../../components/Button";
import { useAuth } from "../../context/UserContext";
import Modal from "../../components/Modal";

function MoviePage() {
  const { popularMovies, topRatedMovies, upcomingMovies, nowPlayingMovies } =
    useMovie();

  const { logout } = useAuth();

  const movies = [
    { name: "Movies", movies: popularMovies },
    { name: "Top Rated", movies: topRatedMovies },
    { name: "Upcoming", movies: upcomingMovies },
    { name: "Now Playing", movies: nowPlayingMovies },
  ];

  const { modal, link } = useMovie();
  return (
    <>
      <Button label="Logout" onClick={() => logout()} />
      <div>
        {modal && (
          <Modal>
            <FrameYoutube link={link} autoplay />
          </Modal>
        )}

        {movies.map((movie, id) => (
          <SectionMovie
            key={id}
            sectionMovies={movie.movies}
            title={movie.name}
            type="row"
          />
        ))}
      </div>
    </>
  );
}

export default MoviePage;
