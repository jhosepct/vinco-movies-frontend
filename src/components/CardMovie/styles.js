import styled from "@emotion/styled";
import { typography } from "../../assets/typography";

export const CardWrapper = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.div`
  ${typography.subtitle2}
  &hover::before {
    content: "${(props) => props.title}";
  }
`;
export const Average = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const PosterWrapper = styled.div`
  width: 200px;
  height: 300px;
  cursor: pointer;
  transition: transform 0.3s ease, -webkit-transform 0.3s ease;
  overflow: hidden;
  border-radius: 0.5rem;

  &:hover {
    webkit-box-shadow: 3px 8px 17px 0 rgb(0 0 0 / 75%);
    box-shadow: 3px 8px 17px 0 rgb(0 0 0 / 75%);
    -webkit-transform: scale(1.03);
    transform: scale(1.03);
    z-index: 25;
  }
  &:hover div {
    opacity: 1;
  }
  img {
    max-width: 100%;
    display: block;
  }
`;

export const MovieDetails = styled.div`
  position: absolute;
  opacity: 0;
  transition: opacity 0.3s ease;
  width: 200px;
  height: 300px;
  background: rgba(21, 20, 10, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
`;

export const MovieDescription = styled.div``;

export const Description = styled.div`
  display: flex;
  justify-content: space-between;
  ${typography.subtitle2}
`;
