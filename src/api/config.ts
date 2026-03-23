import axios from "axios";
import Cookies from "js-cookie";
import { TOKEN_KEY } from "../constants/token.const";

export const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${Cookies.get(TOKEN_KEY)}`,
  },
});

api.interceptors.request.use((config) => {
  const token = Cookies.get(TOKEN_KEY);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
