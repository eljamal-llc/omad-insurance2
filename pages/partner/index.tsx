import { FC } from "react";
import type { NextPage } from "next";
import {
  Layout,
  Navbar,
  Hero,
  MultiSlider,
  Footer,
  News,
  WrapperTitle,
  WantKnowM,
} from "../../components";

export interface PartnerProps {}

const Partner: FC<NextPage> = () => {
  return (
    <Layout title="Страхование имущества">
      <Navbar />
      <Hero />
      <WrapperTitle title="Услуги" />
      <MultiSlider />
      <WantKnowM />
      <News />
      <Footer />
    </Layout>
  );
};

export default Partner;
