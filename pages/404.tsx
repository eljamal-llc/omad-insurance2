import { FC } from "react";
import type { NextPage } from "next";
import {  Navbar , NotFoundPage } from "../components";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next'
 
export async  function getStaticProps({locale}:{locale : string} ) {
  return {
    props:{
     ...(await serverSideTranslations(locale, [
        'common'
      ]))
    },
  };
}


const NotFound: FC<NextPage> = () => {
  return (
      <>
      <Navbar/>
      <NotFoundPage/>
      </>
  );
};

export default NotFound;
