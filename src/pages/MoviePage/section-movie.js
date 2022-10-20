import ListMovies from "../../components/ListMovie";
import * as Styled from "./styles";

function SectionMovie({ sectionMovies, title, ...props }) {
  const { type } = props;
  return (
    <>
      {sectionMovies.length === 0 ? null : (
        <Styled.Collection>
          <h1>{title}</h1>
          <Styled.ContentMovie type={props.type}>
            <ListMovies movies={sectionMovies} {...props} />
          </Styled.ContentMovie>
        </Styled.Collection>
      )}
    </>
  );
}

export default SectionMovie;
