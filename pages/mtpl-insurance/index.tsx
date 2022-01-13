import { FC, useEffect, useMemo, useState } from "react";
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
import BreadcrumbsBlock from "../../components/common/bread-crumbs/Breadcrumbs";

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
  const singleId = Object.values(router.query).toString()
  console.log(singleId)
  const singleTitle = useMemo(() => {
    switch (singleId) {
      case '23': return 'СТРОИТЕЛЬНО-МОНТАЖНЫЕ И  ТЕХНИЧЕСКИЕ РИСКИ'
      case '8': return 'СТРАХОВАНИЕ ЗДОРОВЬЯ'
      case '9' :  return 'СТРАХОВАНИЕ ИМУЩЕСТВА'
      case '10' : return 'ДРУГИЕ ПРОГРАММЫ'
      case '12' : return 'СТРАХОВАНИЕ ЗДОРОВЬЯ'
      case '13' : return 'СТРАХОВАНИЕ ИМУЩЕСТВА'
      case '14' : return 'СТРАХОВАНИЕ ОТВЕТСВЕННОСТИ'
      case '15' : return 'ТРАНСПОРТ И ПЕРЕВОЗКИ '
      case '16' : return 'ОТРАСЛЕВЫЕ ПРОДУКТЫ'
      case '16' : return 'ОТРАСЛЕВЫЕ ПРОДУКТЫ'
      case '17' : return 'Перестрахование'
      case '18' : return 'Строительство'
      
      default: ' Cингл'

    }
  }, [singleId])
  useEffect(() => {
    api.get("insurance", { params: { id: id } }).then(async (response) => {
      await seyInsurance(response.data.data[0]);
    });
  }, []);
  return (
    <Layout title={singleTitle}>
      <Navbar />
      <BreadcrumbsBlock url2={'/page-persons?id=18'} url3={'mtpl-insurance?id=' + singleId} link1="Главная" link2="СТРОИТЕЛЬСТВО" link3={singleTitle} />

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
