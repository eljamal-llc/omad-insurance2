import { FC } from "react";
import type { NextPage } from "next";
import { MissionProps } from "./Mission.t";
import parse from "html-react-parser";
import {
  MissionBody,
  MissionNav,
  MissionNavItem,
  MissionContent,
  MissionContentTitle,
  MissionContentAbout,
  MissionContentAbItem,
} from "./Mission.e";
import Link from "next/dist/client/link";
import {
  ContainerHero,
  HeroBgItem,
  PageHeading,
  PageText,
} from "../../yur-face-page/hero-bg/hero-bg.e";
import { GWrapper } from "../../../styles/global-styles.e";
import BreadcrumbsBlock from "../../common/bread-crumbs/Breadcrumbs";
import { AboutNav } from "../../common";
import { useTranslation } from "react-i18next";
// import { Link } from "@mui/icons-material";
const main_image = "/slider1.jpg";
const MissionComp: FC<MissionProps> = ({
  title,
  description,
  data,
  sidebars,
}) => {
  const { t } = useTranslation();

  // console.log("inner ->>>>", data[0]);

  return (
    <>
      <ContainerHero imgUrl={main_image}>
        <GWrapper>
          <HeroBgItem>
            <PageHeading>{title}</PageHeading>
            <PageText>{description}</PageText>
          </HeroBgItem>
        </GWrapper>
      </ContainerHero>
      <MissionBody>
        <MissionContent>
          {data.length > 0 &&
            data.map((item: any, idx: any) => (
              <div key={idx}>
                <MissionContentTitle>{item.title}</MissionContentTitle>
                <MissionContentAbout></MissionContentAbout>
                <MissionContentAbItem>
                  {parse(item.description)}
                </MissionContentAbItem>
              </div>
            ))}

          <AboutNav sidebars={sidebars} />
        </MissionContent>
      </MissionBody>
    </>
  );
};

export default MissionComp;
