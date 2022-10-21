import { css } from "@emotion/css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../services/movies";
import FrameYoutube from "../FrameYoutube";

import * as Styled from "./styles";

import { AiFillStar } from "react-icons/ai";
import Button from "../Button";

function Details() {
  const { id } = useParams();

  const [movie, setMovie] = useState({});
  useEffect(() => {
    getMovieDetails(id).then((response) => setMovie(response));
  }, []);
  console.log(movie);
  return (
    <>
      <Styled.Wrapper>
        <div
          className={css`
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
          `}
        >
          <div
            className={css`
              position: relative;
              width: 200px;
              height: 300px;
            `}
          >
            <div
              className={css`
                position: absolute;
                width: 200px;
                height: 300px;
              `}
            >
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
          </div>
          <Styled.Details>
            <Styled.Title>{movie.title}</Styled.Title>
            <Styled.OriginalTitle>@{movie.original_title}</Styled.OriginalTitle>
            <div>synopsis: </div>
            <Styled.Overview>{movie.overview}</Styled.Overview>
            <Styled.ExtraInfo>
              <span>release date:</span> {movie.release_date}
            </Styled.ExtraInfo>
            <Styled.ExtraInfo>
              <span>original language:</span> {movie.original_language}
            </Styled.ExtraInfo>
          </Styled.Details>
          <Styled.Details>
            <Styled.Genres>
              <span>Genres:</span>{" "}
              <div>
                {movie.genres?.map((genre) => (
                  <Styled.Genre key={genre.id}>{genre.name}</Styled.Genre>
                ))}
              </div>
            </Styled.Genres>
            <Styled.Rating>
              <div>rating</div>
              <div>
                <AiFillStar color="yellow" />
                {movie.vote_average}
              </div>
            </Styled.Rating>

            <Styled.Buttons>
              <Button variant="secondary" background="#ffffff" label="Button" />
              <Button variant="secondary" background="#ffffff" label="Button" />
            </Styled.Buttons>
          </Styled.Details>
        </div>
      </Styled.Wrapper>
      <div className={css``}>
        <FrameYoutube link="KAR_frNR0AA" />
      </div>
    </>
  );
}

export default Details;
