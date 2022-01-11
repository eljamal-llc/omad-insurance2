import { FC, useEffect, useState } from "react";
import type { NextPage } from "next";
import {
  AboutInfo,
  Cards,
  Footer,
  Hero,
  Layout,
  Navbar,
  News,
  WrapperTitle,
} from "../../components";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next'
import { api } from "../../services/api";
import { IData } from "../../components/common/hero/hero.t";
import { INewsData } from "../../components/common/news/news.t";
 
export async  function getStaticProps({locale}:{locale : string} ) {
  return {
    props:{
     ...(await serverSideTranslations(locale, [
        'common'
      ]))
    },
  };
}
export interface AboutProps {}
const About: FC<NextPage> = () => {
const [news, setNews] = useState<INewsData[] | []>([]);
const [sliders, setSliders] = useState<IData[] | []>([])

  useEffect(() => {
    // setLoading(true);
    api.get('slider-categories').then(async (response) => {
      await setSliders(response.data.data);
    });



    api.get('news').then((res) => {
      setNews(res.data.data);
    });
  }, []);
const {t} = useTranslation()

  return (
    <Layout title={t('common:Property_insurance')}>
      <Navbar />
      <Hero data={sliders} />
      <WrapperTitle title={t('common:All_about_the_company')} />
      <Cards />
      <AboutInfo />
      <News data={news} />
      <Footer />
    </Layout>
  );
};

export default About;
function setSliders(data: any) {
  throw new Error("Function not implemented.");
}

function setNews(data: any) {
  throw new Error("Function not implemented.");
}

