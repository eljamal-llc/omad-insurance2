import { FC } from "react";
import type { NextPage } from "next";
import {
  Layout,
  Navbar,
  PersonalAreaNav,
  MyPolic,
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

const MyPolics: FC<NextPage> = () => {
  return (
    <Layout title="Мои страховые полиса" >
      <Navbar />
      <PersonalAreaNav/>
      <MyPolic/>


    </Layout>
  );
};

export default MyPolics;
