import { RiCloseLine } from "react-icons/ri";

const Modal = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 100;
`;

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
