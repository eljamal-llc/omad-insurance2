import { FC } from "react";
import type { NextPage } from "next";
import {
  Layout,
  Navbar,
  PersonalAreaNav,
  PersonalUdates
} from "../../components";

export interface PartnerProps {}

const buy: FC<NextPage> = () => {
  return (
    <Layout title="Продлить полис онлайн">
      <Navbar />
      <PersonalAreaNav/>
      <PersonalUdates/>


    </Layout>
  );
};

export default buy;
