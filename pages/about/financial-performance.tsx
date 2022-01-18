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
  FinancialPerformance
} from "../../components";

import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next'
import { INewsData } from "../../components/common/news/news.t";
import { api } from "../../services/api";
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

export interface AboutProps {}
    const Values: FC<NextPage> = () => {
    const {t} = useTranslation()
    const [news, setNews] = useState<INewsData[] | []>([]);


    useEffect(() => {
    // setLoading(true);
    

    api.get('news').then((res) => {
        setNews(res.data.data);
    });
    }, []);
    return (
        <Layout title={t('common:Financial_performance')}>
        <Navbar />
        <BreadcrumbsBlock url2={`/about`} url3={'financial-performance'}  link1="Главная" link2='О нас'link3={t('common:Financial_performance')}/>

        <FinancialPerformance title={t('common:Financial_performance')} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie posuere nibh amet semper scelerisque sollicitudin. Orci nam quisque ullamcorper nisi a turpis volutpat. Consectetur lacus, iaculis mauris sed vitae tellus tempor, tortor. "/>
        <News data={news}  />
        <Footer />
        </Layout>
    );
    };

    export default Values;
