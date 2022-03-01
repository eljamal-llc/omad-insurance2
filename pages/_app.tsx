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
import { AuthProvider } from "../context/AuthContext";

// axios.defaults.baseURL = "https://omad.eljamalgroup.uz/api/";
import { appWithTranslation } from 'next-i18next';
import { Router } from "next/router";
import useRouterScroll from "../components/helper/useScroll";
function MyApp({ Component, pageProps }: AppProps) {
  Router.events.on('routeChangeComplete', () => { window.scrollTo(0, 0); });
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default appWithTranslation(MyApp);
