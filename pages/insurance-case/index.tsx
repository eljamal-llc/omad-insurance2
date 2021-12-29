import { FC } from "react";
import type { NextPage } from "next";
import {
  CardsCase,
  Footer,
  HeroCase,
  Layout,
  Navbar,
  WrapperCategory,
} from "../../components";
import { Wrapper } from "../../styles/global-styles.e";
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
export interface InsuranceCaseProps {}

const InsuranceCase: FC<NextPage> = () => {
  const {t} = useTranslation()
  return (
    <Layout title={t('common:polit_market')}>
      <Wrapper>
        <Navbar onClass="bg-blue" />
        <HeroCase />
        <WrapperCategory />
        <CardsCase />
        <Footer />
      </Wrapper>
    </Layout>
  );
};

export default InsuranceCase;
