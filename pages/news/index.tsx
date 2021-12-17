import { FC } from "react";
import type { NextPage } from "next";
import {
  Layout,
  Navbar,
  Hero,
  Footer,
  PoliticsBody,
  NewsBody,
} from "../../components";

export interface NewsPageProps {}

const NewsPage: FC<NextPage> = () => {
  return (
    <Layout title="Страхование имущества">
      <Navbar />
      <Hero />
      <NewsBody />
      <Footer />
    </Layout>
  );
};

export default NewsPage;
