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
  Requisites,
} from "../../components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { AboutNav } from "../../components/common";
import { api } from "../../services/api";
import { useRouter } from "next/router";
import { INewsData } from "../../components/common/news/news.t";
import { IData } from "../../components/common/hero/hero.t";
import BreadcrumbsBlock from "../../components/common/bread-crumbs/Breadcrumbs";
export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
export interface AboutProps {}
const Mission: FC<NextPage> = () => {
  const { t } = useTranslation();
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
    api
      .get("about/find", { params: { catId: id } })
      .then((res) => {
        setPage(res.data.data);
      })
      .catch((err) => {});
  }, []);
  return (
    <Layout title={t("common:Requisites")}>
      <Navbar />
      <BreadcrumbsBlock
        link1="Главная "
        link2="О нас"
        url2={"/about"}
        url3={"/about/requisites"}
        link3="Реквизиты"
      />
      {!!page && (
        <Requisites
          title={page.head.title}
          data={page.content}
          sidebars={page.sidebar}
        />
      )}

      <News data={news} />
      <Footer data={footer} />
    </Layout>
  );
};

export default Mission;
