import { id, tokenKey } from "../config";
import { apiFetch } from "./api-fetch";

export const getUser = () => {
  const token = sessionStorage.getItem(tokenKey);
  apiFetch.defaults.headers.common["Authorization"] = token;
  const id_user = sessionStorage.getItem(id);
  return apiFetch.get(`/profile/${id_user}`).then(({ data }) => {
    const { token, ...user } = data;
    return user;
  });
};

export const login = (credentials) => {
  return apiFetch.post("/login", credentials).then(({ data }) => {
    const { token, ...user } = data;
    sessionStorage.setItem(tokenKey, token);
    sessionStorage.setItem(id, user.id);
    return user;
  });
};

export const logout = () => {
  sessionStorage.removeItem(tokenKey);
  sessionStorage.removeItem(id);
  return apiFetch.get("/logout").catch((e) => console.log(e));
};

export const signup = (credentials) => {
  return apiFetch.post("/signup", credentials).then(({ response }) => {
    return response;
  });
};
