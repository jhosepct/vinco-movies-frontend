import { AiFillStar } from "react-icons/ai";
import PropTypes from "prop-types";
import {
  Average,
  CardWrapper,
  Description,
  MovieDescription,
  MovieDetails,
  PosterWrapper,
  Title,
} from "./styles";

function CardMovie({ movie }) {
  // console.log(props);
  const { title, poster, vote_average, overview, year } = movie;
  return (
    <CardWrapper>
      <PosterWrapper>
        <MovieDetails>
          <button>Ver Detalles</button>
          <button>Ver Detalles</button>
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
  );
}

CardMovie.propTypes = {
  movie: PropTypes.object.isRequired,
};

CardMovie.defaultProps = {
  movie: {},
};

export default CardMovie;
