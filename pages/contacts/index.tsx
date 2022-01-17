import { FC, useEffect, useState } from "react";
import type { NextPage } from "next";
import {
  Layout,
  Navbar,
  Footer,
  ContactsHome,
  News,
  ContactsCards,
} from "../../components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { api } from "../../services/api";
import { INewsData } from "../../components/common/news/news.t";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export interface PartnerProps {}

const Contacts: FC<NextPage> = () => {
  const [contact, setContact] = useState();
  const [news, setNews] = useState<INewsData[] | []>([]);
  useEffect(() => {
    api.get("contacts").then((res) => {
      // console.log("---------", res);
      setContact(res.data);
    });
    api.get("news").then((res) => {
      setNews(res.data.data);
    });
  }, []);
  return (
    <Layout title="КОНТАКТЫ">
      <Navbar />
      {contact && (
        <>
          {" "}
          {/* @ts-ignore */}
          <ContactsHome data={contact.main_content} /> {/* @ts-ignore */}
          <ContactsCards data={contact.filials} />
        </>
      )}

      <News data={news} />
      <Footer />
    </Layout>
  );
};

export default Contacts;
