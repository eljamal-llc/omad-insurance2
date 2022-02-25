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
  MissionComp,
  
} from "../../../components";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { INewsData } from "../../../components/common/news/news.t";
import { api } from "../../../services/api";
import { useRouter } from "next/router";
import BreadcrumbsBlock from "../../../components/common/bread-crumbs/Breadcrumbs";
export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  return {
      paths: [
      ], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}
export interface AboutProps {}
const Values: FC<NextPage> = () => {
  const { t } = useTranslation();
  const [news, setNews] = useState<INewsData[] | []>([]);
  const [page, setPage] = useState<any>();
  const router = useRouter();
  const { id } = router.query;
  const [insurance, seyInsurance] = useState<any>();

  useEffect(() => {
    // setLoading(true);

    api.get("news").then((res) => {
      setNews(res.data.data);
    });
    api
      .get("about/find", { params: { catId: router.query.id } })
      .then((res) => {
        setPage(res.data.data);
      })
      .catch((err) => {});
  }, []);
  return (
    <Layout footer={null} title={t("common:Social_responsibility")}>
      <Navbar />
      <BreadcrumbsBlock
      // @ts-ignore
       breadcrumb={page?.breadcrumb }
      />
      {!!page && (
        <MissionComp
          title={page.head.title}
          data={page.content}
          sidebars={page.sidebar}
        />
      )}
      <News data={news} />
    </Layout>
  );
};

export default Values;
