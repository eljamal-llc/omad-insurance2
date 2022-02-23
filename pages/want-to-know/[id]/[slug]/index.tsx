import { FC, useEffect, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import {
  AboutInfo,
  Cards,
  Footer,
  Hero,
  Layout,
  Navbar,
  News,
  WrapperTitle,
  MissionComp,
  WnatKnowS
} from "../../../../components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import BreadcrumbsBlock from "../../../../components/common/bread-crumbs/Breadcrumbs";
import { INewsData } from "../../../../components/common/news/news.t";
import { IData } from "../../../../components/common/hero/hero.t";
import { api } from "../../../../services/api";

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
    
  };
}
export interface AboutProps {}
const Mission: FC<NextPage> = () => {
  const [news, setNews] = useState<INewsData[] | []>([]);
  const [sliders, setSliders] = useState<IData[] | []>([]);
  const [about, setAbout] = useState<any>({});
  const [footer, setFooter] = useState<any>();
  const [page, setPage] = useState<any>();
  const router = useRouter();
  const { id } = router.query;
  const [insurance, seyInsurance] = useState<any>();
  const [want  , setWant] = useState<any>()

  useEffect(() => {
    // setLoading(true);
    api.get("slider-categories").then(async (response) => {
      await setSliders(response.data.data);
    });

    api.get("news").then((res) => {
      setNews(res.data.data);
    });
    api.get("insurance/full", { params: { id: id } })
      .then( (response) => {
         seyInsurance(response.data);
        
      })
      .catch((err) => {
        console.log(err);
      });
    api.get("about").then((res) => {
      // console.log(res.data);
      setAbout(res.data);
    });
    api.get("footer").then((res) => {
      // console.log("--", res);
      setFooter(res.data);
    });
    api.get('want-to-know' ,{ params: { id: router.query.id }})
    .then((response) => {
      setWant(response.data)
    });
    api
      .get("about/find", { params: { catId: id } })
      .then((res) => {
        setPage(res.data.data);
      })
      .catch((err) => {});
  }, []);
  const { t } = useTranslation();

  return (
    <Layout title={want?.content[0]?.title}>
      <Navbar />
      {!!page && (
      <BreadcrumbsBlock
            breadcrumb={want?.breadcrumb }
          />
      )}
        <WnatKnowS     data={want?.content[0]}/>

      <News data={news} />
      <Footer data={footer} />
    </Layout>
  );
};

export default Mission;
