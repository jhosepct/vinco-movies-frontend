import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import Details from "../../components/Details";
import FrameYoutube from "../../components/FrameYoutube";
import Modal from "../../components/Modal";
import { useMovie } from "../../context/MovieContext";
import { getMovieDetails } from "../../services/movies";
import SectionMovie from "../MoviePage/section-movie";

function DetailsPage() {
  const { popularMovies, modal, link } = useMovie();
  const { id } = useParams();

  const [movie, setMovie] = useState({});
  useEffect(() => {
    getMovieDetails(id).then((response) => setMovie(response));
  }, [movie]);

  const navigate = useNavigate();

  return (
    <>
      <Button label="Movies" onClick={() => navigate("/movies")} />
      <Details movie={movie} />
      {modal && (
        <Modal>
          <FrameYoutube link={link} autoplay />
        </Modal>
      )}
      <SectionMovie title="Popular movies" sectionMovies={popularMovies} />
    </>
  );
}

export default DetailsPage;
