import { FC, useEffect, useState } from "react";
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
  }, []);
  const singleId = Object.values(router.query).toString()
  console.log(singleId)

  return (
    <>
    {!loading ? (
      <Layout title="АВТОСТРАХОВАНИЕ">
      <Navbar />
      <BreadcrumbsBlock link1={"Главная"} link2={"АВТОСТРАХОВАНИЕ"} link3={""} url2={'page-persons?id=' + {singleId}} url3={''}/>
      {pageInfo ? (
        <HeroBg data={pageInfo} />
      ) : (
        <Stack spacing={1}>
          <Skeleton variant="rectangular" height={600} />
        </Stack>
      )}

      <YurFaceCard data={insurances} />
      <Footer />
    </Layout>
    ):(<LoadingScreen/>)}
    </>
    
  );
};

export default YurFacePage;
