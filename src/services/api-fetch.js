import axios from "axios";
import { BASE_URI, BASE_URL_MOVIES } from "../config";

export const apiFetch = axios.create({
  baseURL: BASE_URI,
  headers: {
    post: {
      "Content-Type": "application/json;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    },
  },
});

export const apiFetchMovies = axios.create({
  baseURL: BASE_URL_MOVIES,
  headers: {
    post: {
      "Content-Type": "application/json;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    },
  },
});
