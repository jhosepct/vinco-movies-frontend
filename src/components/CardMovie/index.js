import PropTypes from "prop-types";

import { AiFillStar } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import { FaTrailer } from "react-icons/fa";

import {
  Average,
  CardWrapper,
  Description,
  MovieDescription,
  MovieDetails,
  PosterWrapper,
  Title,
} from "./styles";
import Button from "../Button";
import { useMovie } from "../../context/MovieContext";

function CardMovie({ movie }) {
  const { watchVideo } = useMovie();
  const { title, poster, vote_average, year } = movie;
  return (
    <>
      <CardWrapper>
        <PosterWrapper>
          <MovieDetails>
            <Button
              leftIcon={<FaTrailer />}
              label="See trailer"
              size="small"
              variant="secondary"
              shadow={true}
              onClick={() => watchVideo(movie.id)}
              colorText="#fff"
            />
            <Button
              leftIcon={<BsPlusLg />}
              label="Details"
              size="small"
              variant="secondary"
              background="#004a8c"
              onClick={() => console.log(movie.id)}
              shadow={true}
              colorText="#fff"
            />
          </MovieDetails>
          <img src={poster} alt={title} />
        </PosterWrapper>
        <MovieDescription>
          <Title {...movie}>
            {title.length > 24
              ? title.slice(0, 24 - title.length) + "..."
              : title}
          </Title>
          <Description>
            <div>{year}</div>
            <Average>
              <AiFillStar color="yellow" />
              {vote_average}
            </Average>
          </Description>
        </MovieDescription>
      </CardWrapper>
    </>
  );
}

CardMovie.propTypes = {
  movie: PropTypes.object.isRequired,
};

CardMovie.defaultProps = {
  movie: {},
};

export default CardMovie;
