import { FC } from "react";
import type { NextPage } from "next";
import {
  Layout,
  Navbar,
  Footer,
  HeroBg,
  YurFaceCard

} from "../../components";

export interface PartnerProps {}

const YurFacePage: FC<NextPage> = () => {
  return (
    <Layout title="АВТОСТРАХОВАНИЕ">
      <Navbar />
      <HeroBg/>
      <YurFaceCard/>
      <Footer />
    </Layout> 
  );
};

export default YurFacePage;
