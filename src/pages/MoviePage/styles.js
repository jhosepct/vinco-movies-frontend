import styled from "@emotion/styled";

export const Collection = styled.div`
  margin-top: 40px;
  padding: 0 3%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ContentMovie = styled.div`
  position: relative;
  height: ${(props) => (props.type === "row" ? "376px" : "auto")};
  @media (max-width: 768px) {
    height: ${(props) => (props.type === "row" ? "270px" : "auto")};
  }
`;
