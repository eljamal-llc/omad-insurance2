import { FC } from "react";
import type { NextPage } from "next";
import {
  Layout,
  Navbar,
  PersonalAreaNav,
  PersonalAreaBody
} from "../../components";

export interface PartnerProps {}

const PersonalArea: FC<NextPage> = () => {
  return (
    <Layout title="Персональный кобинет">
      <Navbar />
      <PersonalAreaNav/>
        <PersonalAreaBody/>


    </Layout>
  );
};

export default PersonalArea;
