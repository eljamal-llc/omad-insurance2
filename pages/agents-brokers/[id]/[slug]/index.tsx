import { FC, useEffect, useState } from "react";
import type { GetStaticPaths, NextPage } from "next";
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
  AgentsBrokers,
} from "../../../../components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import BreadcrumbsBlock from "../../../../components/common/bread-crumbs/Breadcrumbs";
import { INewsData } from "../../../../components/common/news/news.t";
import { IData } from "../../../../components/common/hero/hero.t";
import { useRouter } from "next/router";
import { api } from "../../../../services/api";
export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  return {
      paths: [
      ], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}
export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
export interface AboutProps {}
const Banks: FC<NextPage> = () => {
  const [news, setNews] = useState<INewsData[] | []>([]);
  const [sliders, setSliders] = useState<IData[] | []>([]);
  const [about, setAbout] = useState<any>({});
  const [footer, setFooter] = useState<any>();
  const [pageInfo, setPageInfo] = useState<any>();
  const [table, setTable] = useState<any>();
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
      .get("partners/find", { params: { id: router.query.id } })
      .then((res) => {
        setPageInfo(res.data);
      })
      .catch((err) => {});
    api
      .get("partners/tablesAgentAndBrokers")
      .then((res) => {
        setTable(res.data);
      })
      .catch((err) => {});
  }, [router.query.id]);
  const { t } = useTranslation();

  return (
    <Layout title={t("Агентам и брокерам")}>
      <Navbar />
      <BreadcrumbsBlock
      // @ts-ignore
        breadcrumb={pageInfo?.data?.breadcrumb}
      />
      {!!pageInfo && !!table ? (
        <AgentsBrokers title={pageInfo.data.head.title}
          data={pageInfo.data}
          table={table.data} />
      ) : (
        ""
      )}

      <News data={news} />
    </Layout>
  );
};

export default Banks;
