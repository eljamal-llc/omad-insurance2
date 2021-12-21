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

export interface InsuranceCaseProps {}

const InsuranceCase: FC<NextPage> = () => {
  return (
    <Layout title="Страхование имущества - about">
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
