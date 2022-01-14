import { FC, useEffect, useState } from "react";
import type { NextPage } from "next";
export interface PoliticsProps {}
import {
  Layout,
  Navbar,
  Hero,
  Footer,
  News,
  PoliticsBody,
} from "../../components";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next'
import { api } from "../../services/api";
 
export async  function getStaticProps({locale}:{locale : string} ) {
  return {
    props:{
     ...(await serverSideTranslations(locale, [
        'common'
      ]))
    },
  };
}
const Politics: FC<NextPage> = () => {
  const [footer, setFooter] = useState<any>();

  useEffect(() => {
  
      api.get("footer").then((res) => {
        // console.log("--", res);
        setFooter(res.data);
      });
  }, []);
  const {t} = useTranslation()
  return (
    <Layout title={t('common:privacy_policy')}>
      <Navbar />
      <Hero />
      <PoliticsBody />
      <News />
      <Footer data={footer} />
    </Layout>
  );
};

export default Politics;
