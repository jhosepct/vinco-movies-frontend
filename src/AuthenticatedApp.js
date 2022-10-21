import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { MovieProvider } from "./context/MovieContext";
import PageNotFound from "./pages/404";
import MoviePage from "./pages/MoviePage";

export const AuthenticatedApp = () => {
  return (
    <MovieProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/movies" />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </MovieProvider>
  );
};
