import { FC, useEffect, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import {
  AboutInfo,
  Cards,
  Footer,
  Hero,
  Layout,
  Navbar,
  News,
  WrapperTitle,
  MissionComp,
} from "../../components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import BreadcrumbsBlock from "../../components/common/bread-crumbs/Breadcrumbs";
import { INewsData } from "../../components/common/news/news.t";
import { IData } from "../../components/common/hero/hero.t";
import { api } from "../../services/api";
import SpecialOffersSingle from "../../components/common/special-offers-single/special-offers-single";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
export interface AboutProps {}
const Mission: FC<NextPage> = () => {
  const [news, setNews] = useState<INewsData[] | []>([]);
  const [sliders, setSliders] = useState<IData[] | []>([]);
  const [about, setAbout] = useState<any>({});
  const [footer, setFooter] = useState<any>();
  const [page, setPage] = useState<any>();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    // setLoading(true);
    api.get("slider-categories").then(async (response) => {
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
  const { t } = useTranslation();

  return (
    <Layout title={t("Копите мили «Аэрофлот Бонус» ")}>
      <Navbar onClass="active" />
      {/* <BreadcrumbsBlock
        url2={`/about`}
        url3={"mission"}
        link1="Главная"
        link2="О нас"
        link3={t("common:Mission")}
      /> */}
      
    <SpecialOffersSingle title="khan" description="asab asab asab"/>
      {/* <News data={news} /> */}
      <Footer data={footer} />
    </Layout>
  );
};

export default Mission;
