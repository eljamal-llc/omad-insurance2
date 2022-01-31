import { FC, useEffect, useState } from "react";
import type { NextPage } from "next";
import {
  AboutInfo,
  Cards,
  Footer,
  Hero,
  Layout,
  Navbar,
  News,
  WrapperTitle,
  BanksComp,
  AgentsBrokers
} from "../../components";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next'
import BreadcrumbsBlock from "../../components/common/bread-crumbs/Breadcrumbs";
import { INewsData } from "../../components/common/news/news.t";
import { IData } from "../../components/common/hero/hero.t";
import { api } from "../../services/api";
import { useRouter } from "next/router";
 
export async  function getStaticProps({locale}:{locale : string} ) {
  return {
    props:{
     ...(await serverSideTranslations(locale, [
        'common'
      ]))
    },
  };
}
export interface AboutProps {}
const Banks: FC<NextPage> = () => {
  const [news, setNews] = useState<INewsData[] | []>([]);
  const [sliders, setSliders] = useState<IData[] | []>([]);
  const [about, setAbout] = useState<any>({});
  const [footer, setFooter] = useState<any>();
  const [insurance, seyInsurance] = useState<any>();
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    // setLoading(true);
    api.get("slider-categories").then(async (response) => {
      await setSliders(response.data.data);
    });
    api.get("insurance/full", { params: { id: id } })
    .then( (response) => {
       seyInsurance(response.data);
      
    })
    .catch((err) => {
      console.log(err);
    });
    api.get("news").then((res) => {
      setNews(res.data.data);
    });
    api.get("about").then((res) => {
      // console.log(res.data);
      setAbout(res.data);
      
    });
    api.get("footer").then((res) => {
      // console.log("--", res);
      setFooter(res.data);
    });
  }, []);
const {t} = useTranslation()

  return (
    <Layout title={t('Агентам и брокерам')}>
      <Navbar  />
      <BreadcrumbsBlock
          
            breadcrumb={insurance?.breadcrumb }
          />

      <AgentsBrokers title={t('Агентам и брокерам')} description={t('common:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie posuere nibh amet semper scelerisque sollicitudin. Orci nam quisque ullamcorper nisi a turpis volutpat. Consectetur lacus, iaculis mauris sed vitae tellus tempor, tortor. ')}/>
      <News data={news}/>
      <Footer data={footer} />
    </Layout>
  );
};

export default Banks;
