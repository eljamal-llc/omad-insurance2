import { FC } from "react";
import type { NextPage } from "next";
import {
  Layout,
  Navbar,
  PersonalAreaNav,
  PersonalAreaInfo,
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

const Info: FC<NextPage> = () => {
  return (
    <Layout title="Информация" footer={undefined}>
      <Navbar />
      <PersonalAreaNav/>
      <PersonalAreaInfo/>


    </Layout>
  );
};

export default Info;
