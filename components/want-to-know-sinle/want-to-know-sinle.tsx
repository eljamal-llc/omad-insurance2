import { FC } from "react";
import type { NextPage } from "next";
import { MissionProps } from "./want-to-know-sinle.t";
import parse from "html-react-parser";
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
import BreadcrumbsBlock from "../common/bread-crumbs/Breadcrumbs";
import { AboutNav } from "../common";
import { useTranslation } from "react-i18next";
// import { Link } from "@mui/icons-material";
const main_image = "/slider1.jpg";
const WnatKnowS: FC<MissionProps> = ({
data
}) => {
  const { t } = useTranslation();

  // console.log("inner ->>>>", data[0]);

  return (
    <>
      <ContainerHero imgUrl={data?.image}>
        <GWrapper>
          <HeroBgItem>
            <PageHeading>{t('common:want_to_know')} </PageHeading>
            {/* <PageText>{data?.text} </PageText> */}
          </HeroBgItem>
        </GWrapper>
      </ContainerHero>
      <MissionBody>
        <MissionContent>
                <MissionContentTitle>{data?.title}</MissionContentTitle>
                <MissionContentAbout>{data?.text}</MissionContentAbout>
                {/* <MissionContentAbItem>
                 test
                </MissionContentAbItem> */}

          {/* <AboutNav sidebars={sidebars} /> */}
          
        </MissionContent>
      </MissionBody>
    </>
  );
};

export default WnatKnowS;
