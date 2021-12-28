import { FC } from "react";
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
const {t} = useTranslation()

  return (
    <Layout title={t('common:Property_insurance')}>
      <Navbar />
      <Hero />
      <WrapperTitle title={t('common:All_about_the_company')} />
      <Cards />
      <AboutInfo />
      <News />
      <Footer />
    </Layout>
  );
};

export default About;
