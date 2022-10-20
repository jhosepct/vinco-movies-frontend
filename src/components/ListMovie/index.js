import CardMovie from "../CardMovie";
import { Wrapper } from "./styles";

import PropTypes from "prop-types";
import { useRef, useState } from "react";

function ListMovies({ movies, ...props }) {
  const card = useRef();
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMousedown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - card.current.offsetLeft);
    setScrollLeft(card.current.scrollLeft);
  };
  const onMouseleave = () => {
    setIsDown(false);
  };

  const onMouseup = () => {
    setIsDown(false);
  };
  const onMousemove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - card.current.offsetLeft;
    const walk = (x - startX) * 3;
    card.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <Wrapper
      {...props}
      ref={card}
      onMouseDown={onMousedown}
      onMouseUp={onMouseup}
      onMouseMove={onMousemove}
      onMouseLeave={onMouseleave}
    >
      {movies.map((movie, i) => (
        <CardMovie key={i} movie={movie} click="click" />
      ))}
    </Wrapper>
  );
}

ListMovies.propTypes = {
  movies: PropTypes.array.isRequired,
  type: PropTypes.oneOf(["row", "column"]),
};

ListMovies.defaultProps = {
  type: "column",
};

export default ListMovies;
