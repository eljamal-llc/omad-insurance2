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
  const {t} = useTranslation();
  return (
    <Layout footer={null} title={t('common:auth')} >
      <Wrapper>
        <Navbar onClass="bg-blue" />
        <AuthPage />
      </Wrapper>
    </Layout>
  );
};

export default Auth;

