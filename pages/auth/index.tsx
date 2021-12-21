import { FC } from "react";
import type { NextPage } from "next";
import { AuthPage, Layout, Navbar } from "../../components";
import { Wrapper } from "../../styles/global-styles.e";

export interface AuthProps {}

const Auth: FC<NextPage> = () => {
  return (
    <Layout title="Страхование имущества">
      <Wrapper>
        <Navbar onClass="bg-blue" />
        <AuthPage />
        <form action="/api/login" method="POST">
          <input type="text" name="name" />
          <input type="submit" value="test" />
        </form>
      </Wrapper>
    </Layout>
  );
};

export default Auth;
