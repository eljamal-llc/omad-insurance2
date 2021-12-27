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
import { IData } from "../components/common/hero/hero.t";
import { ISliderData } from "../components/common/multi-slider/multi-slider.t";
import { IDataWantKnow } from "../components/home/want-know/want-know.t";
import { api } from "../services/api";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next'
 
export async  function getStaticProps({locale}:{locale : string} ) {
  return {
    props:{
     ...(await serverSideTranslations(locale, [
        'common'
      ]))
    },
  };
}
const Home: NextPage = () => {
  const [sliders, setSliders] = useState<IData[] | []>([]);
  const [wantKnows, setWantKnows] = useState<IDataWantKnow[] | []>([]);
  const [sliderData, setSliderData] = useState<ISliderData[] | []>([]);
  const [onlineInsure, setOnlineInsure] = useState("yur");
  const { t } = useTranslation()
  useEffect(() => {
    api.get("slider-categories").then(async (response) => {
      await setSliders(response.data.data);
    });

    api.get("want-to-know").then(async (response) => {
      await setWantKnows(response.data.data);
    });
    api
      .get("category-insurance", { params: { type: onlineInsure } })
      .then(async (response) => {
        await setSliderData(response.data.data);
      });
  }, []);

  useEffect(() => {
    api
      .get("category-insurance", { params: { type: onlineInsure } })
      .then(async (response) => {
        await setSliderData(response.data.data);
      });
  }, [onlineInsure]);

  return (
    <Layout title="Страхование имущества">
      <Navbar />
      <Hero data={sliders} />
      <WantInsure
        onlineInsure={onlineInsure}
        setOnlineInsure={setOnlineInsure}
      />
      <MultiSlider data={sliderData} />
      <WantKnow data={wantKnows} />
       
         
      <Sale />
      <News />
      <Footer />
    </Layout>
  );
};

export default Home;
