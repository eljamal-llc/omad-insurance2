import { FC, useEffect, useState } from "react";
import type { NextPage } from "next";
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
} from "../../components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { IData } from "../../components/common/hero/hero.t";
import { api } from "../../services/api";
import { INewsData } from "../../components/common/news/news.t";
import BreadcrumbsBlock from "../../components/common/bread-crumbs/Breadcrumbs";

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
  const { id } = router.query;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
    // setLoading(true);
    api
      .get("slider-categories", { params: { id: id } })
      .then(async (response) => {
        await setSliders(response.data.data);
      });

    api.get("news").then((res) => {
      setNews(res.data.data);
    });
    api.get("insurance/find", { params: { id: id ? id : 1 } }).then((res) => {
      console.log(res.data);
      setPageData(res.data);
    });
  }, []);

  const sortWrapperTitle = (itemId: number | undefined) => {
    if (itemId != undefined) {
      api
        .get("insurance/find", { params: { id: id ? id : 1, sort_id: itemId } })
        .then((res) => {
          setPageData(res.data);
        });
    } else {
      api.get("insurance/find", { params: { id: id ? id : 1 } }).then((res) => {
        setPageData(res.data);
      });
    }
  };
  const { t } = useTranslation();
  // test
  return (
    <>
      {!loading ? (
        <Layout title={t("common:Property_insurance")}>
          <Navbar />
          <BreadcrumbsBlock
            url2={
              "polit_market"
                ? "insurance-case?id=polit_market"
                : "insurance-case?id=insurance-case"
            }
            url3={""}
            link1="Главная "
            link2={"polit_market" ? "МАГАЗИН ПОЛИС " : "СТРАХОВОЙ СЛУЧАЙ"}
            link3=""
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
          <MultiSlider data={pageData.content} link="mtpl-insurance" />
          {/* @ts-ignore */}
          <WantKnowM data={pageData.want_to_know} />
          {/* @ts-ignore */}
          <SpecialOffers data={pageData.promotions} />
          <News data={news} />
          <Footer />
        </Layout>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export default Partner;
