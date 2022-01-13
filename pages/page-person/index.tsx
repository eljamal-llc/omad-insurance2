import { FC, useEffect, useState } from "react";
import type { NextPage } from "next";
import {
  Layout,
  Navbar,
  Hero,
  MultiSlider,
  Footer,
  News,
  WrapperTitle,
  WantKnowM,
  SpecialOffers,
  LoadingScreen
} from "../../components";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next'
import { IData } from "../../components/common/hero/hero.t";
import { api } from "../../services/api";
import { INewsData } from "../../components/common/news/news.t";
import BreadcrumbsBlock from "../../components/common/bread-crumbs/Breadcrumbs";

export async  function getStaticProps({locale}:{locale : string} ) {
  return {
    props:{
     ...(await serverSideTranslations(locale, [
        'common'
      ]))
    },
  };
}
 


export interface PartnerProps {}
const Partner: FC<NextPage> = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    },1200)
    // setLoading(true);
    api.get('slider-categories').then(async (response) => {
      await setSliders(response.data.data);
    });



    api.get('news').then((res) => {
      setNews(res.data.data);
    });
  }, []);
const {t} = useTranslation()
const [sliders, setSliders] = useState<IData[] | []>([])
const [news, setNews] = useState<INewsData[] | []>([]);

  return (  
    <>
      {!loading ? (
        <Layout title={t('common:Property_insurance')}>
          <Navbar />
        <BreadcrumbsBlock url2={ 'polit_market' ? 'insurance-case?id=polit_market' :'insurance-case?id=insurance-case' } url3={''} link1="Главная " link2={'polit_market' ? "МАГАЗИН ПОЛИС " : 'СТРАХОВОЙ СЛУЧАЙ'} link3="" />
          
          <Hero data={sliders} />
          <WrapperTitle title={t('common:Services')} onClass="view-three" />
          <MultiSlider />
          <WantKnowM />
          <SpecialOffers />
          <News data={news} />
          <Footer />
        </Layout>
      ):(<LoadingScreen/>)}
    </>

  );
};

export default Partner;


