import { FC } from "react";
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
 


export interface PartnerProps {}
const {t} = useTranslation()
const Partner: FC<NextPage> = () => {
  return (  
    <Layout title="Страхование имущества">
      <Navbar />
      <Hero />
      <WrapperTitle title="Услуги" onClass="view-three" />
      <MultiSlider />
      <WantKnowM />
      <SpecialOffers />
      <News />
      <Footer />
    </Layout>
  );
};

export default Partner;
