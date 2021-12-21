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
