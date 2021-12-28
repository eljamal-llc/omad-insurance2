import { FC } from "react";
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
  return (
    <Layout title="Страхование имущества">
      <Navbar />
      <Hero />
      <PoliticsBody />
      <News />
      <Footer />
    </Layout>
  );
};

export default Politics;
