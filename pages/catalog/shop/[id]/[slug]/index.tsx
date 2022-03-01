import { FC } from "react";
import type { GetStaticPaths, NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import {
  CardsCase,
  Footer,
  HeroCase,
  Layout,
  Navbar,
  WrapperCategory,
  LoadingScreen,
} from "../../../../../components";
import { Wrapper } from "../../../../../styles/global-styles.e";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { api } from "../../../../../services/api";
import { ISliderData } from "../../../../../components/common/multi-slider/multi-slider.t";
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
export interface InsuranceCaseProps {}

const InsuranceCase: FC<NextPage> = () => {
  const router = useRouter();
  const { id } = router.query;

  const { t } = useTranslation();
  const [onlineInsure, setOnlineInsure] = useState(1);
  const [sliderData, setSliderData] = useState<ISliderData[] | []>([]);
  const [footer, setFooter] = useState<any>();

  useEffect(() => {
    api
      .get("insurance/find", { params: { id: onlineInsure } })
      .then(async (response) => {
        await setSliderData(response.data);
      });
  }, []);
  const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1200);
      api
        .get("insurance/find", { params: { id: onlineInsure } })
        .then(async (response) => {
          // console.log("-->>", response.data);
          await setSliderData(response.data);
        });
      api.get("footer").then((res) => {
        // console.log("--", res);
        setFooter(res.data);
      });
    }, [onlineInsure]);

  const sortWrapperTitle = (itemId: number | undefined) => {
    if (itemId != undefined) {
      api
        .get("insurance/find", {
          params: { id: onlineInsure, sort_id: itemId },
        })
        .then((res) => {
          setSliderData(res.data);
        });
    } else {
      api
        .get("insurance/find", { params: { id: onlineInsure } })
        .then((res) => {
          setSliderData(res.data);
        });
    }
  };

  return (
    <Layout title={t("common:polit_market")} >
      <Wrapper>
        <Navbar onClass="bg-blue" />
        <HeroCase idx="shop" />
        <WrapperCategory
          setOnlineInsure={setOnlineInsure}
          onlineInsure={onlineInsure}
          // @ts-ignore
          data={sliderData.categories}
          id="shop"
          sortData={sortWrapperTitle}
        />
        {!loading ? (
          //@ts-ignore
          <CardsCase id="shop" data={sliderData.content} />
        ) : (
          <LoadingScreen />
        )}
      </Wrapper>
    </Layout>
  );
};

export default InsuranceCase;
