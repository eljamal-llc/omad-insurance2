import { FC } from "react";
import type { GetServerSideProps, NextPage } from "next";
import { AuthPage, Layout, Navbar } from "../../components";
import { Wrapper } from "../../styles/global-styles.e";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { parseCookies } from "nookies";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
export interface AuthProps {}

const Auth: FC<NextPage> = () => {
  return (
    <Layout title="Страхование имущества">
      <Wrapper>
        <Navbar onClass="bg-blue" />
        <AuthPage />
      </Wrapper>
    </Layout>
  );
};

export default Auth;

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   // console.log("()()---()()", ctx.req.cookies);
//   const { ["nextauth.token"]: token } = parseCookies(ctx);
//   if (!token) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: {},
//   };
// };
