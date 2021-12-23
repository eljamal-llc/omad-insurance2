import { FC } from "react";
import type { NextPage } from "next";
import {
  Layout,
  Navbar,
  PersonalAreaNav,
  PersonalAreaInfo,
} from "../../components";

export interface PartnerProps {}

const Info: FC<NextPage> = () => {
  return (
    <Layout title="Информация">
      <Navbar />
      <PersonalAreaNav/>
      <PersonalAreaInfo/>


    </Layout>
  );
};

export default Info;
