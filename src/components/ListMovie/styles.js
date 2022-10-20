import styled from "@emotion/styled";

export const Wrapper = styled.div`
  ${({ type }) => typeStyles(type)}
`;

function typeStyles(type) {
  switch (type) {
    case "row":
      return `
        position: absolute;
        display: flex;
        gap: 1rem;
        width: 100%;
        overflow: scroll;
        scrollbar-width: none;
        &::-webkit-scrollbar {
          display: none;
        }
      `;
    case "column":
      return `
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
      `;
    default:
      break;
  }
}
