import { AuthenticatedApp } from "./AuthenticatedApp";
import { MovieProvider } from "./context/MovieContext";
import { AuthProvider, useAuth } from "./context/UserContext";
import { UnauthenticatedApp } from "./UnauthenticatedApp";

function App() {
  const { user } = useAuth();
  return (
    <>
      {user ? (
        <MovieProvider>
          <AuthenticatedApp />
        </MovieProvider>
      ) : (
        <UnauthenticatedApp />
      )}
    </>
  );
}

export default App;
