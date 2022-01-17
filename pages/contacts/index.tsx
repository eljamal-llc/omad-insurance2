import { FC, useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { Layout, Navbar, Footer, ContactsHome, News, ContactsCards } from '../../components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { api } from '../../services/api';
import { INewsData } from '../../components/common/news/news.t';

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export interface PartnerProps {}

const Contacts: FC<NextPage> = () => {
  const [footer, setFooter] = useState<any>();
  const [news, setNews] = useState<INewsData[] | []>([]);

  useEffect(() => {
    api.get('footer').then((res) => {
      // console.log("--", res);
      setFooter(res.data);
    });
    api.get('news').then((res) => {
      setNews(res.data.data);
    });
  }, []);
  return (
    <Layout title="КОНТАКТЫ">
      <Navbar />
      <ContactsHome />
      <ContactsCards />
      <News data={news} />
      <Footer data={footer} />
    </Layout>
  );
};

export default Contacts;
