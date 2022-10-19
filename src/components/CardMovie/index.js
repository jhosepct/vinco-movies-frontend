import PropTypes from "prop-types";

import { AiFillStar } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import { ImTicket } from "react-icons/im";

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

function CardMovie({ movie }) {
  const { title, poster, vote_average, year } = movie;
  return (
    <CardWrapper>
      <PosterWrapper>
        <MovieDetails>
          <Button leftIcon={<ImTicket />} label="To buy" size="small" />
          <Button
            leftIcon={<BsPlusLg />}
            label="Details"
            size="small"
            background="#004a8c"
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
  );
}

CardMovie.propTypes = {
  movie: PropTypes.object.isRequired,
};

CardMovie.defaultProps = {
  movie: {},
};

export default CardMovie;
