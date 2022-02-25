import { FC, useEffect, useState } from "react";
import type { GetStaticPaths, NextPage } from "next";
import { useRouter } from "next/router";
import {
  Layout,
  Navbar,
  NewsBody,
  HeroBg,
} from "../../components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Wrapper } from "../../styles/global-styles.e";
import bgImg from "../../public/slider1.jpg";
import BreadcrumbsBlock from "../../components/common/bread-crumbs/Breadcrumbs";

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
export interface NewsPageProps {}

const NewsPage: FC<NextPage> = () => {

 

  return (
    <Layout title="Страхование имущества">
      <Wrapper>
        <Navbar />
        {/* <BreadcrumbsBlock
        // @ts-ignore
            breadcrumb={news?.breadcrumb }
          /> */}
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
        <NewsBody />


      </Wrapper>
    </Layout>
  );
};

export default NewsPage;
