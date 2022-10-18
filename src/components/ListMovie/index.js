import CardMovie from "../CardMovie";
import { Wrapper } from "./styles";

function ListMovies({ movies }) {
  return (
    <Wrapper>
      {movies.map((movie, i) => (
        <CardMovie key={i} movie={movie} click="click" />
      ))}
    </Wrapper>
  );
}

export default ListMovies;
