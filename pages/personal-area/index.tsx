import { FC, useContext, useEffect } from "react";
import type { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import Router from "next/router";
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

const { "nextauth.token": token } = parseCookies();

export interface PartnerProps {}

const PersonalArea: FC<NextPage> = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);

  useEffect(() => {
    api.get("user-data").then(async (res) => {
      console.log("--->>>", res);
    });
    // if (token) {
    //   console.log("token yes !!!!!");
    //   api.get("user-data").then(async (res) => {
    //     console.log("--->>>", res);
    //   });
    // } else {
    //   console.log("token NO !!!!!");
    //   Router.push("/auth");
    // }
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

// export async function getStaticProps({ locale }: { locale: string }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["common"])),
//     },
//   };
// }
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // console.log("()()---()()", ctx.locale);
  const { ["nextauth.token"]: token } = parseCookies(ctx);
  if (!token) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
  return {
    props: {
      // @ts-ignore
      ...(await serverSideTranslations(ctx.locale, ["common"])),
    },
  };
};
export default PersonalArea;
