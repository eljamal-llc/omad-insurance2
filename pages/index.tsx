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
  LoadingScreen,
} from "../components";
import { IData } from "../components/common/hero/hero.t";
import { ISliderData } from "../components/common/multi-slider/multi-slider.t";
import { IDataWantKnow } from "../components/home/want-know/want-know.t";
import { api } from "../services/api";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { INewsData } from "../components/common/news/news.t";
import { useRouter } from "next/router";
import { ISaleData } from "../components/home/sale/sale.t";
export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
const Home: NextPage = () => {
  const router = useRouter();
  console.log(router);
  const [sliders, setSliders] = useState<IData[] | []>([]);
  const [wantKnows, setWantKnows] = useState<IDataWantKnow[] | []>([]);
  const [sliderData, setSliderData] = useState<ISliderData[] | []>([]);
  const [news, setNews] = useState<INewsData[] | []>([]);
  const [sale, setSale] = useState<ISaleData[] | []>([]);

  const [onlineInsure, setOnlineInsure] = useState("1");

  const [loading, setLoading] = useState(false);

  const { t } = useTranslation();
  let [footerHover, setFooterHover] = useState(false);
  let [footers, setfooters] = useState<IMenus[]>();
  useEffect(() => {
    api.get("footer").then((response) => {
      console.log("test", response.data);
      if (response.data.success) {
        setfooters(response.data.data);
      }
    });
  }, []);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
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

    api.get("news").then((res) => {
      setNews(res.data.data);
    });
    api.get("promotions-offers").then((res) => {
      // console.log("--", res);
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
        <Layout title="Страхование имущества">
          <Navbar />
          <Hero data={sliders} />
          <WantInsure
            onlineInsure={onlineInsure}
            setOnlineInsure={setOnlineInsure}
          />
          <MultiSlider data={sliderData} />
          <WantKnow data={wantKnows} />
          <Sale data={sale} />
          <News data={news} />
          <Footer  />
        </Layout>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export default Home;
