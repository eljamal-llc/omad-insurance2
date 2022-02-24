import { FC, useEffect, useState } from "react";
import type { GetServerSideProps, NextPage } from "next";
import { AuthPage, Layout, Navbar ,PolisChack } from "../../components";
import { Wrapper } from "../../styles/global-styles.e";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { parseCookies } from "nookies";
import { api } from "../../services/api";
export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
export interface AuthProps {}

const Auth: FC<NextPage> = () => {
  const [footer, setFooter] = useState<any>();
  useEffect(() => {
  api.get("footer").then((res) => {
    setFooter(res.data);
  });
}, []);

  return (
    <Layout title="Страхование имущества" footer={footer}>
      <Wrapper>
        <Navbar onClass="bg-blue" />
        <PolisChack />
      </Wrapper>
    </Layout>
  );
};

export default Auth;