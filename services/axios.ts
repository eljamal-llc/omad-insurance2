import axios from "axios";
import { parseCookies } from "nookies";

export function getAPIСlient(ctx?: any) {
  const { "nextauth.token": token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: "https://api.omadsugurta.uz/api/",
  });

  api.interceptors.request.use((config) => {
    // console.log(config);
    return config;
  });
  if (token) {
    // @ts-ignore
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  return api;
}
