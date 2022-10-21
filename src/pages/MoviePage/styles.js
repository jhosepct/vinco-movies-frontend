import styled from "@emotion/styled";
import { typography } from "../../assets/typography";

export const Collection = styled.div`
  margin-top: 40px;
  padding: 0 3%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h1 {
    ${typography.headline4}
    ${typography.bold}
  }
  @media (max-width: 768px) {
    h1 {
      ${typography.headline5}
      ${typography.bold}
    }
    gap: 0.5rem;
  }
`;

export const ContentMovie = styled.div`
  position: relative;
  height: ${(props) => (props.type === "row" ? "376px" : "auto")};
  @media (max-width: 768px) {
    height: ${(props) => (props.type === "row" ? "220px" : "auto")};
  }
`;
