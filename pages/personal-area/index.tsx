import { FC } from "react";
import type { NextPage } from "next";
import {
  Layout,
  Navbar,
  PersonalAreaNav,
  PersonalAreaInfo
} from "../../components";

export interface PartnerProps {}

const PersonalArea: FC<NextPage> = () => {
  return (
    <Layout title="Персональный кобинет">
      <Navbar />
      <PersonalAreaNav/>
      <PersonalAreaInfo/>


    </Layout>
  );
};

export default PersonalArea;
