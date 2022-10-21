import styled from "@emotion/styled";

export const Navigation = styled.div`
  z-index: 1;
  width: 50%;
  position: absolute;
  display: flex;
  justify-content: center;
  gap: 0.3rem;
  top: 30px;
`;

export const Icon = styled.div`
  cursor: pointer;
`;

export const Children = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100vh;
`;

export const Img = styled.img`
  opacity: 0.6;
`;
