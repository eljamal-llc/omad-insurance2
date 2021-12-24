import { FC } from "react";
import type { NextPage } from "next";
import {
  Layout,
  Navbar,
  PersonalAreaNav,
  UserData
} from "../../components";

export interface PartnerProps {}

const buy: FC<NextPage> = () => {
  return (
    <Layout title=" Мои данные">
      <Navbar />
      <PersonalAreaNav/>
      <UserData/>


    </Layout>
  );
};

export default buy;
