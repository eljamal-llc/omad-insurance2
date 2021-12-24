import { FC } from "react";
import type { NextPage } from "next";
import {
  Layout,
  Navbar,
  PersonalAreaNav,
  MyPolic,
} from "../../components";

export interface PartnerProps {}

const Info: FC<NextPage> = () => {
  return (
    <Layout title="Мои страховые полиса">
      <Navbar />
      <PersonalAreaNav/>
      <MyPolic/>


    </Layout>
  );
};

export default Info;
