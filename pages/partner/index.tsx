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
  SpecialOffers,
} from "../../components";

export interface PartnerProps {}

const Partner: FC<NextPage> = () => {
  return (
    <Layout title="Страхование имущества">
      <Navbar />
      <Hero />
      <WrapperTitle title="Услуги" onClass="view-three" />
      <MultiSlider />
      <WantKnowM />
      <SpecialOffers />
      <News />
      <Footer />
    </Layout>
  );
};

export default Partner;
