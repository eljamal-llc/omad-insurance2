import type { NextPage } from "next";
import { useEffect, useState } from "react";

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
import { HeroProps, IData } from "../components/common/hero/hero.t";
import { api } from "../services/api";

const Home: NextPage = () => {
  const [sliders, setSliders] = useState<IData[] | []>([]);
  const [onlineInsure, setOnlineInsure] = useState("private");

  useEffect(() => {
    api.get("slider-categories").then(async (response) => {
      await setSliders(response.data.data);
    });
  }, []);

  return (
    <Layout title="Страхование имущества">
      <Navbar />
      <Hero data={sliders} />
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
