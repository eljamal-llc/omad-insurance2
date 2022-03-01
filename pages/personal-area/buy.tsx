import { FC } from "react";
import type { NextPage } from "next";
import {
  Layout,
  Navbar,
  PersonalAreaNav,
  BuyPolis
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

const Buy: FC<NextPage> = () => {
  return (
    <Layout title="Купить полис онлайн">
      <Navbar />
      <PersonalAreaNav/>
      <BuyPolis/>


    </Layout>
  );
};

export default Buy;
