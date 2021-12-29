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
const Partner: FC<NextPage> = () => {
const {t} = useTranslation()

  return (  
    <Layout title={t('common:Property_insurance')}>
      <Navbar />
      <Hero />
      <WrapperTitle title={t('common:Services')} onClass="view-three" />
      <MultiSlider />
      <WantKnowM />
      <SpecialOffers />
      <News />
      <Footer />
    </Layout>
  );
};

export default Partner;
