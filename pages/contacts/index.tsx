import { FC, useEffect, useState } from "react";
import type { NextPage } from "next";
import {
  Layout,
  Navbar,
  Footer,
  ContactsHome,
  News,
  ContactsCards
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
  const [footer, setFooter] = useState<any>();
useEffect(() => {
 
  api.get("footer").then((res) => {
    // console.log("--", res);
    setFooter(res.data);
  });

}, []);
export interface PartnerProps {}

const Contacts: FC<NextPage> = () => {
  return (
    <Layout title="КОНТАКТЫ">
      <Navbar />
      <ContactsHome/>
      <ContactsCards/>
      <News/>
      <Footer data={footer} />


    </Layout>
  );
};

export default Contacts;
