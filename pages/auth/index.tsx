import { FC } from "react";
import type { NextPage } from "next";
import { AuthPage, Layout, Navbar } from "../../components";
import { Wrapper } from "../../styles/global-styles.e";
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
export interface AuthProps {}

const Auth: FC<NextPage> = () => {
  return (
    <Layout title="Страхование имущества">
      <Wrapper>
        <Navbar onClass="bg-blue" />
        <AuthPage />
      </Wrapper>
    </Layout>
  );
};

export default Auth;
