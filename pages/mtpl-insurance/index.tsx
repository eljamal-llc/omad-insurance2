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
import { INewsData } from "../../components/common/news/news.t";

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
  const [insurance, seyInsurance] = useState<any>();
  const singleId = Object.values(router.query).toString();
  const [footer, setFooter] = useState<any>();

  const [news, setNews] = useState<INewsData>();

 
  useEffect(() => {
   
    api.get("insurance/full", { params: { id: id } })
      .then( (response) => {
         seyInsurance(response.data);
        
      })
      .catch((err) => {
        console.log(err);
      });
    api.get("news", { params: { id: id } }).then( (response) => {
       setNews(response.data.data[0]);
    });
    api.get("footer").then((res) => {
      // console.log("--", res);
      setFooter(res.data);
    });
  }, []);
  //@ts-ignore
  // const dataTitle = insurance.main_content.data.title
  console.log(insurance )
  return (
    //@ts-ignore

    <Layout title={"Страхование"}>
      <Navbar />
      {insurance && (
        <div>
          <BreadcrumbsBlock
            breadcrumb={insurance?.breadcrumb }
          />

          <MtplInsuranceHome data={insurance.main_content} />
        </div>
      )}
      {insurance && (
        <MtplAdventages
          dataAdvantage={insurance.advantage}
          dataCardImage={insurance.card_image}
          dataCards={insurance.cards}
          dataSteps={insurance.steps}
          forms={!!insurance.forms && insurance.forms}
        />
      )}

      <Footer data={footer} />
    </Layout>
  );
};

export default YurFacePage;
