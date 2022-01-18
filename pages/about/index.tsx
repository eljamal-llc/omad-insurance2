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
} from "../../components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { api } from "../../services/api";
import { IData } from "../../components/common/hero/hero.t";
import { INewsData } from "../../components/common/news/news.t";
import { CardsProps } from "../../components/about/cards/cards.t";
import BreadcrumbsBlock from "../../components/common/bread-crumbs/Breadcrumbs";
import { useRouter } from "next/router";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
export interface AboutProps {}
const About: FC<NextPage> = () => {
  const [news, setNews] = useState<INewsData[] | []>([]);
  const [Absliders, setSliders] = useState<IData[] | []>([]);
  const [about, setAbout] = useState<any>({});
  const [footer, setFooter] = useState<any>();

  useEffect(() => {
    // setLoading(true);
    api.get("slider-categories?id=4").then(async (response) => {
      await setSliders(response.data.data);
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
  const router = useRouter()
  const { t } = useTranslation();
  const singleId = Object.values(router.query).toString()

  return (
    <Layout title={t("common:Property_insurance")}>
      <Navbar />
      <BreadcrumbsBlock url2={ '/about?id=' + singleId } url3={''} link1="Главная " link2={'О нас'} link3="" />

      <Hero data={Absliders} />
      <WrapperTitle title={t("common:All_about_the_company")} />
      <Cards data={about.categories} />
      <AboutInfo dataLeft={about.content} dataRight={about.vacancy} />
      <News data={news} />
      <Footer data={footer} />
    </Layout>
  );
};
export default About