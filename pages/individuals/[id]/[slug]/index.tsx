import { FC, useEffect, useMemo, useState } from "react";
import type { GetStaticPaths, NextPage } from "next";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";

import { Layout, Navbar, Footer, HeroBg, YurFaceCard ,LoadingScreen } from "../../../../components";
import { api } from "../../../../services/api";
import { ICards } from "../../../../components/yur-face-page/yur-face-card/yur-face-card.t";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import BreadcrumbsBlock from "../../../../components/common/bread-crumbs/Breadcrumbs";

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  return {
      paths: [
        
      ], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}
export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
export interface PartnerProps {}

const YurFacePage: FC<NextPage> = () => {
  const [pageInfo, setPageInfo] = useState<any>();
  const [insurances, setInsurances] = useState<ICards[]>([]);

  const [insurance, seyInsurance] = useState<any>();

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
        await setPageInfo(response.data.data);
        const p = JSON.parse(pageInfo);
      });
     
    api
      .get("insurance", { params: { catInsId: id } })
      .then(async (response) => {
        await setInsurances(response.data.data);
      });
      api.get("footer").then((res) => {

        setFooter(res.data);
      });
  }, [router.query.id]);
  

  return (
    <>
    {!loading ? (
      <Layout title={'Cтахование'} footer={footer}>
      <Navbar />
      
  
{/* @ts-ignore   */}
      {pageInfo?.map((element:any) => { // use map
      return (
        <BreadcrumbsBlock key={1}
        breadcrumb={element.breadcrumb}
            />
      );
    })}
      
      {pageInfo ? (
        <HeroBg data={pageInfo} />
      ) : (
        <Stack spacing={1}>
          <Skeleton variant="rectangular" height={600} />
        </Stack>
      )}

      <YurFaceCard data={insurances} />
    </Layout>
    ):(<LoadingScreen/>)}
    </>
    
  );
 

};


export default YurFacePage;
