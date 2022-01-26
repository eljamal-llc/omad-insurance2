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
  FinancialPerformance,
} from "../../components";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { INewsData } from "../../components/common/news/news.t";
import { api } from "../../services/api";
import BreadcrumbsBlock from "../../components/common/bread-crumbs/Breadcrumbs";
export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export interface AboutProps {}
const Values: FC<NextPage> = () => {
  const { t } = useTranslation();
  const [news, setNews] = useState<INewsData[] | []>([]);
  const [page, setPage] = useState<any>();
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    // setLoading(true);

    api.get("news").then((res) => {
      setNews(res.data.data);
    });
    api
      .get("about/find", { params: { catId: id } })
      .then((res) => {
        // console.log("-->>>", res);
        setPage(res.data.data);
      })
      .catch((err) => {});
  }, []);
  return (
    <Layout title={t("common:Financial_performance")}>
      <Navbar />
      <BreadcrumbsBlock
        url2={`/about`}
        url3={"financial-performance"}
        link1="Главная"
        link2="О нас"
        link3={t("common:Financial_performance")}
      />
      {!!page && (
        <FinancialPerformance
          title={page.head.title}
          sidebars={page.sidebar}
          data={page.content}
        />
      )}

      <News data={news} />
      <Footer />
    </Layout>
  );
};

export default Values;
