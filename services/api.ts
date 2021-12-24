import axios from "axios";
import { parseCookies } from "nookies";

const { "nextauth.token": token } = parseCookies();

export const api = axios.create({
  baseURL: "https://omad.eljamalgroup.uz/api/",
});

api.interceptors.request.use((config) => {
  console.log(config);
  return config;
});
if (token) {
  // @ts-ignore
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
