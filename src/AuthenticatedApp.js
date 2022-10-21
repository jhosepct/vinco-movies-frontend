import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Button from "./components/Button";
import { useAuth } from "./context/UserContext";
import MoviePage from "./pages/MoviePage";

export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/movies" />} />
        <Route path="/movies" element={<MoviePage />} />
      </Routes>
    </>
  );
};
