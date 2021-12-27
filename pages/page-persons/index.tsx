import { FC, useEffect, useState } from "react";
import type { NextPage } from "next";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";

import { Layout, Navbar, Footer, HeroBg, YurFaceCard } from "../../components";
import { api } from "../../services/api";
import { ICards } from "../../components/yur-face-page/yur-face-card/yur-face-card.t";

export interface PartnerProps {}

const YurFacePage: FC<NextPage> = () => {
  const [pageInfo, setPageInfo] = useState();
  const [insurances, setInsurances] = useState<ICards[]>([]);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    api
      .get("category-insurance", { params: { id: id } })
      .then(async (response) => {
        await setPageInfo(response.data.data);
      });
    api
      .get("insurance", { params: { catInsId: id } })
      .then(async (response) => {
        await setInsurances(response.data.data);
      });
  }, []);

  return (
    <Layout title="АВТОСТРАХОВАНИЕ">
      <Navbar />
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
  );
};

export default YurFacePage;
