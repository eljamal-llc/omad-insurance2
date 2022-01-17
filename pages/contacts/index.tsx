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
import BreadcrumbsBlock from "../../components/common/bread-crumbs/Breadcrumbs";

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
  const [footer, setFooter] = useState<any>();

  useEffect(() => {
    api.get("contacts").then((res) => {
      // console.log("---------", res);
      setContact(res.data);
    });
    api.get("news").then((res) => {
      setNews(res.data.data);
    });
    api.get("footer").then((res) => {
      // console.log("--", res);
      setFooter(res.data);
    });
  }, []);
  return (
    <Layout title="КОНТАКТЫ">
      <Navbar />
      {contact && (
        <>
          {" "}
          <BreadcrumbsBlock
              link1="Главная"
              url3={""}
              url2={"/contacts"}
              link2="Контакты"
              link3=""
            />
          {/* @ts-ignore */}
          <ContactsHome data={contact.main_content} /> {/* @ts-ignore */}
          <ContactsCards data={contact.filials} />
        </>
      )}

      <News data={news} />
      <Footer data={footer} />
    </Layout>
  );
};

export default Contacts;
