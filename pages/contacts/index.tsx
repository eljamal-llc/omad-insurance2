import { FC } from "react";
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

const Contacts: FC<NextPage> = () => {
  return (
    <Layout title="КОНТАКТЫ">
      <Navbar />
      <ContactsHome/>
      <ContactsCards/>
      <News/>
      <Footer/>

    </Layout>
  );
};

export default Contacts;
