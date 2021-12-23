import { FC } from "react";
import type { NextPage } from "next";
import {
  Layout,
  Navbar,
  PersonalAreaNav,
  Settings
} from "../../components";

export interface PartnerProps {}

const buy: FC<NextPage> = () => {
  return (
    <Layout title=" настройки">
      <Navbar />
      <PersonalAreaNav/>
      <Settings/>


    </Layout>
  );
};

export default buy;
