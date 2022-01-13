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
import { MtplInsuranceHomeProps } from "../../components/mtpl-insurance/mtpl-insurance-home/mtpl-insurance-home.t";

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
  const [insurance, seyInsurance] = useState<MtplInsuranceHomeProps>();
  useEffect(() => {
    api.get("insurance", { params: { id: id } }).then(async (response) => {
      await seyInsurance(response.data.data[0]);
    });
  }, []);
  return (
    <Layout title="АВТОСТРАХОВАНИЕ">
      <Navbar />
      {insurance && (
        <MtplInsuranceHome
          title={insurance.title}
          description={insurance.description}
          image={insurance.image}
        />
      )}
      {insurance && (
        <MtplAdventages
          // @ts-ignore
          title_text={insurance.title_text}
          // @ts-ignore
          first_text={insurance.first_text}
          // @ts-ignore
          second_text={insurance.second_text}
          // @ts-ignore
          first_image={insurance.first_image}
          // @ts-ignore
          second_image={insurance.first_image}
          // @ts-ignore
          three_text={insurance.three_text}
          // @ts-ignore
          four_text={insurance.four_text}
        />
      )}

      <Footer />
    </Layout>
  );
};

export default YurFacePage;
