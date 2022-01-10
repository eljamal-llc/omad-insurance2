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
        <HeroBg
          // @ts-ignore
          data={[
            {
              title: "Новость",
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
