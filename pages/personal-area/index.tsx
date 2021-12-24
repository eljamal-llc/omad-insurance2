import { FC, useContext, useEffect } from "react";
import type { NextPage } from "next";
import { AuthContext } from "../../context/AuthContext";

import {
  Layout,
  Navbar,
  PersonalAreaNav,
  PersonalAreaInfo,
} from "../../components";
import { api } from "../../services/api";

export interface PartnerProps {}

const PersonalArea: FC<NextPage> = () => {
  const { user } = useContext(AuthContext);

  // useEffect(() => {
  //   api
  //     .post("categories", {
  //       title_uz: "test uz1",
  //       title_ru: "test ru1",
  //       title_en: "test en1",
  //       slug: "slug1",
  //     })
  //     .then((response) => {
  //       console.log("test", response.data);
  //       // if (response.data.success) {
  //       //   setMenus(response.data.data);
  //       // }
  //     });
  // }, []);

  return (
    <Layout title="Персональный кобинет">
      <Navbar />
      <PersonalAreaNav />
      <h1 style={{ color: "red" }}>WElcom {user?.name}</h1>
      <PersonalAreaInfo />
    </Layout>
  );
};

export default PersonalArea;
