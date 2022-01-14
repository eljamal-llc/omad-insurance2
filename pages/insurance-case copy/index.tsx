import { FC } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import {
  CardsCase,
  Footer,
  HeroCase,
  Layout,
  Navbar,
  WrapperCategory,
} from "../../components";
import { Wrapper } from "../../styles/global-styles.e";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { api } from "../../services/api";
import { ISliderData } from "../../components/common/multi-slider/multi-slider.t";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
export interface InsuranceCaseProps {}

const InsuranceCase: FC<NextPage> = () => {
  const router = useRouter();
  const { id } = router.query;

  const { t } = useTranslation();
  const [onlineInsure, setOnlineInsure] = useState("fiz");
  const [sliderData, setSliderData] = useState<ISliderData[] | []>([]);
  useEffect(() => {
    api
      .get("category-insurance", { params: { type: onlineInsure } })
      .then(async (response) => {
        await setSliderData(response.data.data);
      });
  }, []);

  useEffect(() => {
    api
      .get("category-insurance", { params: { type: onlineInsure } })
      .then(async (response) => {
        await setSliderData(response.data.data);
      });
  }, [onlineInsure]);
  const [footer, setFooter] = useState<any>();
  useEffect(() => {
   
    api.get("footer").then((res) => {
      // console.log("--", res);
      setFooter(res.data);
    });
  
  }, []);
  return (
    <Layout title={t("common:polit_market")}>
      <Wrapper>
        <Navbar onClass="bg-blue" />
        <HeroCase id={id} />
        <WrapperCategory
          setOnlineInsure={setOnlineInsure}
          onlineInsure={onlineInsure}
          id={id && id}
        />
        {/* @ts-ignore */}
        <CardsCase id={id} data={sliderData} />
      <Footer data={footer} />
      </Wrapper>
    </Layout>
  );
};

export default InsuranceCase;
