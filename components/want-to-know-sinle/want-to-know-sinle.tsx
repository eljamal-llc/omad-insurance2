import { FC } from "react";
import type { NextPage } from "next";
import { MissionProps } from "./want-to-know-sinle.t";

import NextLink from "next/link";
import {
  MissionBody,
  MissionNav,
  MissionNavItem,
  MissionContent,
  MissionContentTitle,
  MissionContentAbout,
  MissionContentAbItem,
} from "./want-to-know-sinle.e";
import Link from "next/dist/client/link";
import {
  ContainerHero,
  HeroBgItem,
  PageHeading,
  PageText,
} from "../yur-face-page/hero-bg/hero-bg.e";
import { GWrapper } from "../../styles/global-styles.e";
import { useTranslation } from "react-i18next";
import slugify from "slugify";
import parse from "html-react-parser"; 
const WnatKnowS: FC<MissionProps> = ({
data,
links
}) => {
  const { t } = useTranslation();

  return (
    <>
      <ContainerHero imgUrl={data?.main_image}>
        <GWrapper>
          <HeroBgItem>
            <PageHeading>{t('common:want_to_know')} </PageHeading>

          </HeroBgItem>
        </GWrapper>
      </ContainerHero>
      <MissionBody>
        <MissionContent>
          <div>
          <MissionContentTitle>{data?.title}</MissionContentTitle>
                <MissionContentAbout>{parse(""+data?.full_text)}</MissionContentAbout>
          </div>
              
          <MissionNav>
            {links?.map((item:any , idx:any)=>(
                <a href={`/want-to-know/${item.id}/${slugify(item.title)}`}  key={idx}>
                  <MissionNavItem> {item.title}</MissionNavItem>
                </a>
            ))}
       
      </MissionNav>
          
        </MissionContent>
      </MissionBody>
    </>
  );
};

export default WnatKnowS;
