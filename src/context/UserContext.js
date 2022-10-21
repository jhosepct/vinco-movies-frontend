import { createContext, useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { apiFetch } from "../services/api-fetch";
import * as Services from "../services/user-services";
import { userReducer } from "./userReducer";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducer(userReducer, null);
  const navigate = useNavigate();

  useEffect(() => {
    Services.getUser()
      .then((user) => {
        dispatch({ type: "setUser", payload: user });
      })
      .catch((error) => {
        console.log(error.response.data.message);
        navigate("/login");
      });
  }, []);

  const login = (credentials) => {
    return Services.login(credentials).then((user) => {
      dispatch({ type: "setUser", payload: user });
      navigate("/");
    });
  };

  const logout = () => {
    return Services.logout()
      .then(() => {
        apiFetch.defaults.headers.common["Authorization"] = null;
        dispatch({ type: "removeUser" });
        navigate("/login");
      })
      .catch((e) => console.log(e.message));
  };

  const signup = (credentials) => {
    return Services.signup(credentials).then((user) => {
      navigate("/login");
    });
  };

  const value = {
    user,
    login,
    logout,
    signup,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
