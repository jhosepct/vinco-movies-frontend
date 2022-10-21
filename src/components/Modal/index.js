import { RiCloseLine } from "react-icons/ri";

import { Modal } from "./styles";

function Modal({ children }) {
  const { dispatch } = useMovie();
  return (
    <Modal>
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
        {children}
      </div>
    </Modal>
  );
}

export default Modal;
