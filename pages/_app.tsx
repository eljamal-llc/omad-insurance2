import type { AppProps } from "next/app";
import axios from "axios";
// fonts
import "../assets/fonts/Roboto/stylesheet.css";
import "../assets/fonts/Montserrat/stylesheet.css";
// swiper
import "swiper/css/bundle";
// global css
import "../styles/_normalize.scss";
import "../styles/globals.css";
axios.defaults.baseURL = "https://omad.eljamalgroup.uz/api/";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
