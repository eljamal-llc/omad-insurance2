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
  Requisites
  
} from "../../components";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next'
import {AboutNav} from '../../components/common'
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
    <Layout title={t('common:Requisites')}>
      <Navbar  />
      <Requisites title={t('common:Requisites')} description={t('common:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie posuere nibh amet semper scelerisque sollicitudin. Orci nam quisque ullamcorper nisi a turpis volutpat. Consectetur lacus, iaculis mauris sed vitae tellus tempor, tortor. ')}/>
      <News />
      <Footer />
    </Layout>
    
  );
};

export default Mission;
