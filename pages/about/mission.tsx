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
  MissionComp
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
const Mission: FC<NextPage> = () => {
const {t} = useTranslation()

  return (
    <Layout title={t('common:Property_insurance')}>
      <Navbar />
      <MissionComp title={t('common:Mission')} description={t('common:Mission')}/>
      <News />
      <Footer />
    </Layout>
  );
};

export default Mission;
