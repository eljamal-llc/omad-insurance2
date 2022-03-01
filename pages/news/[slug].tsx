import { FC, useCallback, useEffect, useLayoutEffect, useState } from "react";
import { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage } from 'next'

import {
  Layout,
  Navbar,
  HeroBg,
  SectionTitle,
} from "../../components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { MWrapper, Wrapper } from "../../styles/global-styles.e";
import bgImg from "../../public/slider1.jpg";
import { api } from "../../services/api";
import parse from "html-react-parser";
import FourSlider from "../../components/news/news-body/four-slider/four-slider";
import BreadcrumbsBlock from "../../components/common/bread-crumbs/Breadcrumbs";

type Data = {
  id: number,
  title: string,
  anons: string,
  text: string,
  image: string,
  meta_title: string,
  meta_description: string,
  created_at: {
      day: number,
      month: string,
      year: number
  },
  slug: string
}

export interface NewsPageProps {}

const NewsPage: NextPage<{data: Data}> = props => {

  return (
    
    <Layout title={props.data.title}>
      <Wrapper>
        <Navbar />
        {/* <BreadcrumbsBlock
        // @ts-ignore
            breadcrumb={news?.breadcrumb }
          /> */}
        <HeroBg
          // @ts-ignore
          data={[
            {
              name: "Новость",
              bg_image: bgImg.src,
              description: "",
            },
          ]}
        />
       <Wrapper>
     
      <MWrapper>
        {props.data && (
          <>
          {/* @tsignore */}
            <SectionTitle title={props.data?.title} color="black" classN="title" />
            {parse(props.data.text)}
          </>   
        )}
       
        <SectionTitle title="Други новости" color="black" classN="title-slider" />
        <div className="four-sldier">
          {/* <FourSlider news={props?.newsList } /> */}
        </div>
      </MWrapper>
  
    </Wrapper>


      </Wrapper>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async({
  params,
  res
}) => {
  const { slug } = params;
  const result = await api.get(`v2/news/show/${slug}`);
  const data:Data = await result.json();
  // post:post.data.data,
  //     newsList:post.data.part,
  return {
    props: {
      data,
      // ...(await serverSideTranslations(params.locale, ["common"])),
    }
  };
}



export default NewsPage;
