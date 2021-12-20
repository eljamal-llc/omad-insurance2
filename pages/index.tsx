import type { NextPage } from "next";
import { useState } from "react";

import {
  Layout,
  Navbar,
  Hero,
  WantInsure,
  MultiSlider,
  Sale,
  Footer,
  WantKnow,
  News,
} from "../components";

const Home: NextPage = () => {
  const [onlineInsure, setOnlineInsure] = useState("private");

  return (
    <Layout title="Страхование имущества">
      <Navbar />
      <Hero />
      <WantInsure
        onlineInsure={onlineInsure}
        setOnlineInsure={setOnlineInsure}
      />
      <MultiSlider />
      <WantKnow />
      <Sale />
      <News />
      <Footer />
    </Layout>
  ); 
};

export default Home;
