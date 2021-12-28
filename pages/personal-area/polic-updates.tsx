import { FC } from "react";
import type { NextPage } from "next";
import {
  Layout,
  Navbar,
  PersonalAreaNav,
  PersonalUdates
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
    <Layout title="Продлить полис онлайн">
      <Navbar />
      <PersonalAreaNav/>
      <PersonalUdates/>


    </Layout>
  );
};

export default buy;
