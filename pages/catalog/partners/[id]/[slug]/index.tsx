import { FC, useEffect, useMemo, useState } from "react";
import type { GetStaticPaths, NextPage } from "next";
import { useRouter } from "next/router";
import {
  Layout,
  Navbar,
  Hero,
  MultiSlider,
  Footer,
  News,
  WrapperTitle,
  WantKnowM,
  SpecialOffers,
  LoadingScreen,
} from "../../../../../components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { IData } from "../../../../../components/common/hero/hero.t";
import { api } from "../../../../../services/api";
import { INewsData } from "../../../../../components/common/news/news.t";
import BreadcrumbsBlock from "../../../../../components/common/bread-crumbs/Breadcrumbs";

export const getStaticPaths: GetStaticPaths<{ id: string, slug: string }> = async () => {
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

export interface PartnerProps {}
const Partner: FC<NextPage> = () => {
  const [loading, setLoading] = useState(false);
  const [sliders, setSliders] = useState<IData[] | []>([]);
  const [news, setNews] = useState<INewsData[] | []>([]);
  const [pageData, setPageData] = useState([]);
  const router = useRouter();
  const [footer, setFooter] = useState<any>();
  const [partnerCategory, setPartnerCategory] = useState<any>();

  

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
    // setLoading(true);
    api.get("partners/index").then(async (response) => {
      // console.log("->aa ", response);
      await setPartnerCategory(response.data.data);
    });
    api
      .get("slider-categories", { params: { id: router.query.id } })
      .then(async (response) => {
        await setSliders(response.data.data);
      });
    api.get("footer").then((res) => {
      // console.log("--", res);
      setFooter(res.data);
    });

    api.get("news").then((res) => {
      setNews(res.data.data);
    });
    api.get("insurance/find", { params: { id: router.query.id } }).then((res) => {
      setPageData(res.data);
    });
  }, []);

  const sortWrapperTitle = (itemId: number | undefined) => {
    if (itemId != undefined) {
      api
        .get("insurance/find", { params: { id: router.query.id, sort_id: itemId } })
        .then((res) => {
          setPageData(res.data);
        });
    } else {
      api.get("insurance/find", { params: { id:router.query.id } }).then((res) => {
        setPageData(res.data);
      });
    }
  };
  const { t } = useTranslation();
  const singleId = Object.values(router.query).toString();

  // test
  return (
    <>
      {!loading ? (
        <Layout title={t("common:Property_insurance")} footer={footer}>
          <Navbar />
          <BreadcrumbsBlock
            // @ts-ignore
            breadcrumb={pageData?.breadcrumb}
          />

          <Hero data={sliders} />
          <WrapperTitle
            title={t("common:Services")}
            onClass="view-three"
            // @ts-ignore
            data={pageData.categories}
            sortData={sortWrapperTitle}
          />
          {/* @ts-ignore */}
          {!loading ? (
            //@ts-ignore
            <MultiSlider data={partnerCategory} link="mtpl-insurance" />
          ) : (
            <LoadingScreen />
          )}
          {/* @ts-ignore */}
          <WantKnowM data={pageData.want_to_know} />
          {/* @ts-ignore */}
          <SpecialOffers data={pageData.promotions} />
          <News data={news} />
        </Layout>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export default Partner;
