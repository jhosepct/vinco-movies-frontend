import styled from "@emotion/styled";
import { Route, Routes } from "react-router-dom";
import Button from "./components/Button";
import FrameYoutube from "./components/FrameYoutube";
import { MovieProvider, useMovie } from "./context/MovieContext";
import { useAuth } from "./context/UserContext";
import MoviePage from "./pages/MoviePage";

import { RiCloseCircleLine, RiCloseLine } from "react-icons/ri";
import { css } from "@emotion/css";

const Modal = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 100;
`;
export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  const { dispatch, modal, link } = useMovie();
  return (
    <>
      <Button label="Logout" onClick={() => logout()} />
      {modal && (
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
            <FrameYoutube link={link} />
          </div>
        </Modal>
      )}
      <Routes>
        <Route path="/" element={<MoviePage />} />
      </Routes>
    </>
  );
};
