import { FC } from "react";
import { LayoutProps } from "./layout.t";
import Head from "next/head";

const Layout: FC<LayoutProps> = ({ children, title }) => {
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>

      <main>{children}</main>
    </>
  );
};

export default Layout;
