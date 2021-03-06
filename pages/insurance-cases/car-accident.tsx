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
  LoadingScreen,
  News,
  CardAccident,
} from "../../components";
import { Wrapper } from "../../styles/global-styles.e";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { api } from "../../services/api";
import { ISliderData } from "../../components/common/multi-slider/multi-slider.t";
import { INewsData } from "../../components/common/news/news.t";

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
  const [news, setNews] = useState<INewsData[] | []>([]);
  const [onlineInsure, setOnlineInsure] = useState(1);
  const [sliderData, setSliderData] = useState<ISliderData[] | []>([]);
  const [footer, setFooter] = useState<any>();

  useEffect(() => {
    api
      .get("insurance-case/index", {
        params: { type: onlineInsure },
      })
      .then(async (response) => {
        await setSliderData(response.data.data);
      });
    api.get("footer").then((res) => {
      // console.log("--", res);
      setFooter(res.data);
    });
    api.get("news").then((res) => {
        setNews(res.data.data);
      });
  }, []);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
    api
      .get("insurance-case/index", {
        params: { type: onlineInsure },
      })
      .then(async (response) => {
        await setSliderData(response.data.data);
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
    <Layout title={'?????????????????? ??????'}>
      <Wrapper>
        <Navbar  />
       <CardAccident title="?????????????????? ??????" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie posuere nibh amet semper scelerisque sollicitudin. Orci nam quisque ullamcorper nisi a turpis volutpat. Consectetur lacus, iaculis mauris sed vitae tellus tempor, tortor. "/>
        <News data={news} />
        
        <Footer data={footer} />
      </Wrapper>
    </Layout>
  );
};

export default InsuranceCase;
