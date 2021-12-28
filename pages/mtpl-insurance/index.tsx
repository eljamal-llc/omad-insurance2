import { FC } from "react";
import type { NextPage } from "next";
import {
  Layout,
  Navbar,
  MtplInsuranceHome,
  MtplAdventages,
  HeroBg,
  YurFaceCard,
  Footer

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

const YurFacePage: FC<NextPage> = () => {
  return (
    <Layout title="АВТОСТРАХОВАНИЕ">
      <Navbar />
      <MtplInsuranceHome
        HomeHeading="Ответственность товаропроизводителя"
        HomeText="Страхование без осмотра автомобиля и похода в офис. Скидки (КБМ) на ОСАГО за безаварийную езду"
      />
      <MtplAdventages />
      <Footer/>

    </Layout>
  );
};

export default YurFacePage;
