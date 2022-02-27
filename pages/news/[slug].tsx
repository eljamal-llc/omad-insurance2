import { FC, useCallback, useEffect, useLayoutEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Router, useRouter } from "next/router";
import {
  Layout,
  Navbar,
  NewsBody,
  HeroBg,
  SectionTitle,
} from "../../components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { MWrapper, Wrapper } from "../../styles/global-styles.e";
import bgImg from "../../public/slider1.jpg";
import BreadcrumbsBlock from "../../components/common/bread-crumbs/Breadcrumbs";
import { api } from "../../services/api";
import { INewsData } from "../../components/common/news/news.t";
import parse from "html-react-parser";
import FourSlider from "../../components/news/news-body/four-slider/four-slider";


export interface NewsPageProps {}

const NewsPage: FC<NextPage> = (props) => {

  const router  = useRouter();

  return (
    
    <Layout title={props.post?.title}>
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
        {props.post && (
          <>
          {/* @tsignore */}
            <SectionTitle title={props.post?.title} color="black" classN="title" />
            {parse(props.post.text)}
          </>   
        )}
       
        <SectionTitle
          title="Други новости"
          color="black"
          classN="title-slider"
        />
        <div className="four-sldier">
          <FourSlider news={props.newsList} />
        </div>
      </MWrapper>
    </Wrapper>


      </Wrapper>
    </Layout>
  );
};


export async function getServerSideProps(context) {
  try{
    const { data } = await api.get(`v2/news/show/${context.params.slug}`);
    const post = data;
    
    return { props: { 
      'post':post.data.data,
      'newsList':post.data.part,
      ...(await serverSideTranslations(context.locale, ["common"])),
    } }
  }catch{
    return {
      notFound: true,
    };
  }
}

export default NewsPage;
