import { FC } from "react";
import type { NextPage } from "next";
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
        <BreadcrumbsBlock url3={''} url2={'news'} link1="Главная" link2="News" link3="" /> 
        <HeroBg
          // @ts-ignore
          data={[
            {
              name: "Новость",
              bg_image: bgImg.src,
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie posuere nibh amet semper scelerisque sollicitudin. Orci nam quisque ullamcorper nisi a turpis volutpat. Consectetur lacus, iaculis mauris sed vitae tellus tempor, tortor. ",
            },
          ]}
        />
        <NewsBody />

        <Footer />
      </Wrapper>
    </Layout>
  );
};

export default NewsPage;
