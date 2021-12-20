import { FC } from "react";
import type { NextPage } from "next";
export interface PoliticsProps {}
import {
  Layout,
  Navbar,
  Hero,
  Footer,
  News,
  PoliticsBody,
} from "../../components";
const Politics: FC<NextPage> = () => {
  return (
    <Layout title="Страхование имущества">
      <Navbar />
      <Hero />
      <PoliticsBody />
      <News />
      <Footer />
    </Layout>
  );
};

export default Politics;
