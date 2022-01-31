import { FC, useEffect, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import {
  Layout,
  Navbar,
  Hero,
  Footer,
  PoliticsBody,
  NewsBody,
  HeroBg,
} from "../../components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Wrapper } from "../../styles/global-styles.e";
import bgImg from "../../public/slider1.jpg";
import BreadcrumbsBlock from "../../components/common/bread-crumbs/Breadcrumbs";
import { api } from "../../services/api";
import { INewsData } from "../../components/common/news/news.t";
export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
export interface NewsPageProps {}

const NewsPage: FC<NextPage> = () => {
  const router = useRouter();
  const { id } = router.query;
  const [footer, setFooter] = useState<any>();
  const [insurance, seyInsurance] = useState<any>();

  const [news, setNews] = useState<INewsData>();


  useEffect(() => {
    api.get("news", { params: { id: id } }).then(async (response) => {
      await setNews(response.data.data[0]);
    });
    api.get("footer").then((res) => {
      // console.log("--", res);
      setFooter(res.data);
    });
    api.get("insurance/full", { params: { id: id } })
      .then( (response) => {
         seyInsurance(response.data);
        
      })
  }, []);

  return (
    <Layout title="Страхование имущества">
      <Wrapper>
        <Navbar />
        <BreadcrumbsBlock
            breadcrumb={insurance?.breadcrumb }
          />
        <HeroBg
          // @ts-ignore
          data={[
            {
              name: "Новость",
              bg_image: bgImg.src,
              description: "",
            },
          ]}
        />
        <NewsBody news={news} />

        <Footer data={footer} />

      </Wrapper>
    </Layout>
  );
};

export default NewsPage;
