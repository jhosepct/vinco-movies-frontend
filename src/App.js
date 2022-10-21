import { css } from "@emotion/css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { AuthenticatedApp } from "./AuthenticatedApp";
import { MovieProvider } from "./context/MovieContext";
import { AuthProvider, useAuth } from "./context/UserContext";
import PageNotFound from "./pages/404";
import { UnauthenticatedApp } from "./UnauthenticatedApp";

function App() {
  const { user } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      {user ? (
        <MovieProvider>
          <AuthenticatedApp />
        </MovieProvider>
      ) : (
        <UnauthenticatedApp />
      )}
      <Routes>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
