import { FC } from "react";
import type { NextPage } from "next";
import {
  AboutInfo,
  Cards,
  Footer,
  Hero,
  Layout,
  Navbar,
  News,
  WrapperTitle,
} from "../../components";

export interface AboutProps {}

const About: FC<NextPage> = () => {
  return (
    <Layout title="Страхование имущества - about">
      <Navbar />
      <Hero />
      <WrapperTitle title="Все о компании" />
      <Cards />
      <AboutInfo />
      <News />
      <Footer />
    </Layout>
  );
};

export default About;
