import { Route, Routes } from "react-router-dom";
import Button from "./components/Button";
import { useAuth } from "./context/UserContext";
import MoviePage from "./pages/MoviePage";

export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <>
      <Button label="Logout" onClick={() => logout()} />
      <Routes>
        <Route path="/" element={<MoviePage />} />
      </Routes>
    </>
  );
};
