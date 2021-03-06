import { FC, useEffect, useMemo, useState } from "react";
import type { NextPage } from "next";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";

import { Layout, Navbar, Footer, HeroBg, YurFaceCard ,LoadingScreen } from "../../components";
import { api } from "../../services/api";
import { ICards } from "../../components/yur-face-page/yur-face-card/yur-face-card.t";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
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
  const [pageInfo, setPageInfo] = useState();
  const [insurances, setInsurances] = useState<ICards[]>([]);

  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(false);
  const [footer, setFooter] = useState<any>();

  useEffect(() => {
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    },1200)
    api
      .get("category-insurance", { params: { id: id } })
      .then(async (response) => {
        // console.log("---->>>>>>", response);
        await setPageInfo(response.data.data);
      });
    api
      .get("insurance", { params: { catInsId: id } })
      .then(async (response) => {
        await setInsurances(response.data.data);
      });
      api.get("footer").then((res) => {
        // console.log("--", res);
        setFooter(res.data);
      });
  }, []);
  const singleId = Object.values(router.query).toString()
  const singleTitle = useMemo(() => {
  console.log('asfkljsfdjhg rldikhg;lk' + singleId)
    
    switch (singleId) {
      case '7': return 'АВТОСТРАХОВАНИЕ'
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
      

      case '11' : return 'АВТОСТРАХОВАНИЕ'
      default: ' Cингл'

    }
  }, [singleId])
  // let  [SingleTitle , setSingleTitle] = useState(singleId)

  // if( singleId == '7'){
  //   setSingleTitle('АВТОСТРАХОВАНИЕ')
  // }
  // if(singleId == '8') {
  //   setSingleTitle('СТРАХОВАНИЕ ЗДОРОВЬЯ')

  // }
  return (
    <>
    {!loading ? (
      <Layout title={singleTitle}>
      <Navbar />
      <BreadcrumbsBlock link1={"Главная"} link2={singleTitle} link3={""} url2={'page-persons?id=' + singleId} url3={''}/>
      {pageInfo ? (
        <HeroBg data={pageInfo} />
      ) : (
        <Stack spacing={1}>
          <Skeleton variant="rectangular" height={600} />
        </Stack>
      )}

      <YurFaceCard data={insurances} />
      <Footer data={footer} />
    </Layout>
    ):(<LoadingScreen/>)}
    </>
    
  );
 

};


export default YurFacePage;
