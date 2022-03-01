import { FC, useEffect, useState } from "react";
import type { NextPage } from "next";
export interface PoliticsProps {}
import {
  Layout,
  Navbar,
  Hero,
  Footer,
  News,
  PoliticsBody,
} from "../../components";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next'
import { api } from "../../services/api";
import { INewsData } from "../../components/common/news/news.t";
import { IData } from "../../components/common/hero/hero.t";
 
export async  function getStaticProps({locale}:{locale : string} ) {
  return {
    props:{
     ...(await serverSideTranslations(locale, [
        'common'
      ]))
    },
  };
}
const Politics: FC<NextPage> = () => {
  const [footer, setFooter] = useState<any>();
  const [news, setNews] = useState<INewsData[] | []>([]);
  const [sliders, setSliders] = useState<IData[] | []>([]);

  useEffect(() => {
    api.get("news").then((res) => {
      setNews(res.data.data);
    });
      api.get("footer").then((res) => {
        // console.log("--", res);
        setFooter(res.data);
      });
      api.get("slider-categories").then(async (response) => {
        await setSliders(response.data.data);
      });
  }, []);
  const {t} = useTranslation()
  return (
    <Layout title={t('common:privacy_policy')}>
      <Navbar />
      <Hero />
      <PoliticsBody />
      <News data={news} />
    </Layout>
  );
};

export default Politics;
