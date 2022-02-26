import { FC } from "react";
import { LayoutProps } from "./layout.t";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import { Footer } from "..";

const Layout: FC<LayoutProps> = ({ 
  children, 
  title,
  meta_title,
  meta_description,
  meta_keywords,
  meta_image
  }) => {
  const {t} = useTranslation();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="meta_title" content={meta_title?meta_title:'OMAD SUG`URTA'} />
        <meta name="meta_description" content={meta_description?meta_description:'OMAD SUG`URTA'} />
        <meta name="meta_keywords" content={meta_keywords?meta_keywords:'OMAD SUG`URTA'} />
        <meta property="og:image" content={meta_image?meta_image:''}></meta>
        <meta property="og:title" content={meta_title?meta_title:'OMAD SUG`URTA'} key="title" />
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
      </Head>

      <main>{children}</main>

      <Footer/>
    </>
  );
};

export default Layout;
