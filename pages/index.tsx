import type { NextPage } from "next";
import { useEffect, useState } from "react";
import {Layout,Navbar,Hero,WantInsure,MultiSlider,Sale,WantKnow, News,LoadingScreen} from "../components";

import { IData } from "../components/common/hero/hero.t";

import { ISliderData } from "../components/common/multi-slider/multi-slider.t";
import { IDataWantKnow } from "../components/home/want-know/want-know.t";
import { api } from "../services/api";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { INewsData } from "../components/common/news/news.t";
import { ISaleData } from "../components/home/sale/sale.t";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
const Home: NextPage = () => {
  
  
  const [sliderData, setSliderData] = useState<ISliderData[] | []>([]);
  const [news, setNews] = useState<INewsData[] | []>([]);
  const [sale, setSale] = useState<ISaleData[] | []>([]);
 

  const [onlineInsure, setOnlineInsure] = useState("1");

  const [loading, setLoading] = useState(true);

  const { t } = useTranslation();
  
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);

  

   
    api
      .get("category-insurance", { params: { type: onlineInsure } })
      .then(async (response) => {
        await setSliderData(response.data.data);
      });

    api.get("news").then((res) => {
      setNews(res.data.data);
    });
    api.get("promotions-offers").then((res) => {
      setSale(res.data.data);
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
    <>
      {!loading ? (
        <Layout title={t('site_name')} >
      
          <Navbar />
          <Hero />
          
          <WantInsure
            onlineInsure={onlineInsure}
            setOnlineInsure={setOnlineInsure}
          />
          <MultiSlider data={sliderData} />
          <WantKnow   />
          <Sale data={sale} />
          <News data={news} />
          {/* @ts-ignore */}
        </Layout>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export default Home;
