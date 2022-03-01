import { FC, useContext, useEffect, useState } from "react";
import type { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import { AuthContext } from "../../context/AuthContext";
import {
  Layout,
  Navbar,
  PersonalAreaNav,
  PersonalAreaInfo,
} from "../../components";
import { api } from "../../services/api";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { getAPIСlient } from "../../services/axios";

const { "nextauth.token": token } = parseCookies();

export interface PartnerProps {}

const PersonalArea: FC<NextPage> = () => {
  const [userInfo, setUserInfo] = useState({});
  const { user } = useContext(AuthContext);
  // console.log(user);

  useEffect(() => {
    api.get("user-data").then(async (res) => {
    });
  }, []);
  const { t } = useTranslation();
  return (
    <Layout title={t("common:Personal_Cobinet")}>
      <Navbar />
      <PersonalAreaNav />
      {/* <h1 style={{ color: "red" }}>WElcom {user?.name}</h1> */}
      <PersonalAreaInfo />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // console.log("()()---()()", ctx.locale);

  const apiClient = getAPIСlient(ctx);
  const { ["nextauth.token"]: token } = parseCookies(ctx);
  if (!token) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  // await apiClient.get("user-data").then(async (res) => {
  //   // console.log("--->>>", res);
  // });
  return {
    props: {
      // @ts-ignore
      ...(await serverSideTranslations(ctx.locale, ["common"])),
    },
  };
};
export default PersonalArea;
