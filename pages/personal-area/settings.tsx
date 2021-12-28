import { FC } from "react";
import type { NextPage } from "next";
import {
  Layout,
  Navbar,
  PersonalAreaNav,
  Settings
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

const buy: FC<NextPage> = () => {
  return (
    <Layout title=" настройки">
      <Navbar />
      <PersonalAreaNav/>
      <Settings/>


    </Layout>
  );
};

export default buy;
