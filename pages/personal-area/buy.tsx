import { FC } from "react";
import type { NextPage } from "next";
import {
  Layout,
  Navbar,
  PersonalAreaNav,
  BuyPolis
} from "../../components";

export interface PartnerProps {}

const buy: FC<NextPage> = () => {
  return (
    <Layout title="Купить полис онлайн">
      <Navbar />
      <PersonalAreaNav/>
      <BuyPolis/>


    </Layout>
  );
};

export default buy;
