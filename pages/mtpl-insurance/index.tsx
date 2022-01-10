import { FC, useEffect, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import {
  Layout,
  Navbar,
  MtplInsuranceHome,
  MtplAdventages,
  HeroBg,
  YurFaceCard,
  Footer,
} from "../../components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { api } from "../../services/api";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
export interface PartnerProps {}

const YurFacePage: FC<NextPage> = () => {
  const router = useRouter();
  const { id } = router.query;
  const [insurance, seyInsurance] = useState();
  useEffect(() => {
    api.get("insurance", { params: { id: id } }).then(async (response) => {
      await seyInsurance(response.data.data[0]);
    });
  }, []);
  return (
    <Layout title="АВТОСТРАХОВАНИЕ">
      <Navbar />
      <MtplInsuranceHome
        HomeHeading="Ответственность товаропроизводителя"
        HomeText="Страхование без осмотра автомобиля и похода в офис. Скидки (КБМ) на ОСАГО за безаварийную езду"
      />
      <MtplAdventages />
      <Footer />
    </Layout>
  );
};

export default YurFacePage;
