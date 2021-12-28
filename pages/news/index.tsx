import { FC } from "react";
import type { NextPage } from "next";
import {
  Layout,
  Navbar,
  Hero,
  Footer,
  PoliticsBody,
  NewsBody,
} from "../../components";
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
export interface NewsPageProps {}

const NewsPage: FC<NextPage> = () => {
  return (
    <Layout title="Страхование имущества">
      <Navbar />
      <Hero />
      <NewsBody />
      
      <Footer />
    </Layout>
  );
};

export default NewsPage;
