import { FC } from "react";
import type { NextPage } from "next";
import {
  Layout,
  Navbar,
  MtplInsuranceHome,
  HeroBg,
  YurFaceCard

} from "../../components";

export interface PartnerProps {}

const YurFacePage: FC<NextPage> = () => {
  return (
    <Layout title="АВТОСТРАХОВАНИЕ">

      <Navbar />
      <MtplInsuranceHome />
    </Layout> 
  );
};

export default YurFacePage;
