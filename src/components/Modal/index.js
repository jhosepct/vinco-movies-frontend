import { css } from "@emotion/css";
import { RiCloseLine } from "react-icons/ri";
import { useMovie } from "../../context/MovieContext";

import * as Styled from "./styles";

function Modal({ children }) {
  const { dispatch } = useMovie();
  return (
    <Styled.Modal>
      <div
        className={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <RiCloseLine
          size={25}
          className={css`
            align-self: flex-end;
            cursor: pointer;
          `}
          onClick={() => dispatch({ type: "closeModal" })}
        />
        <div>{children}</div>
      </div>
    </Styled.Modal>
  );
}

export default Modal;
