import type { NextPage } from "next";
import { useEffect, useState } from "react";
import {Layout,Navbar,Hero,WantInsure,Sale,WantKnow, News,LoadingScreen} from "../components";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const Home: NextPage = () => { 

  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


  return (
    <>
      {!loading ? (
        <Layout title={t('site_name')} >
          <Navbar />
          <Hero />
          <WantInsure/>
          <WantKnow/>
          <Sale/>
          <News/>
        </Layout>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export default Home;
