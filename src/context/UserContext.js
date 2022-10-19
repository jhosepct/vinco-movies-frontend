import { createContext, useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
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
        console.log(error);
      });
  }, []);

  const login = (credentials) => {
    return Services.login(credentials).then((user) => {
      dispatch({ type: "setUser", payload: user });
      navigate("/");
    });
  };

  const logout = () => {
    return Services.logout().then(() => {
      dispatch({ type: "setUser", payload: null });
    });
  };

  const value = {
    user,
    login,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
