import { PartnersProps } from "./partners.t";
import { FC, useState } from "react";
import type { NextPage } from "next";
import Link from "next/dist/client/link";
import {
  ContainerHero,
  HeroBgItem,
  PageHeading,
  PageText,
} from "../../yur-face-page/hero-bg/hero-bg.e";
import parse from "html-react-parser";
import { GWrapper } from "../../../styles/global-styles.e";
import {
  MissionBody,
  MissionContent,
  MissionNav,
  MissionNavItem,
} from "../mission/Mission.e";
import { SectionTitle, MainBtn, AboutNav } from "../../common";
import { useTranslation } from "react-i18next";
import {
  FinancialYears,
  FinancialBlock,
  FinancialBlockTitle,
  FinicialBloclContent,
  DownloadBlock,
  FinicialP,
  DwBtnBlock,
  DwBlockBorder,
} from "../financial-performance/financial-performance.e";
import Image from "next/image";

import {
  SponsrBlock,
  SponsorTitle,
  SponsorTitleItem,
  ImageCard,
} from "./partners.e";
import {
  RulesSearch,
  Slogan,
  Pravila,
  InfoDoc,
  InfoDocItem,
  BlockDocs,
  Suk,
} from ".././Insurance-rules/Insurance-rules.e";
// import PDFImage from "../../../../assets/images/about/carbon_document-pdf.png";

const main_image = "/slider1.jpg";
const PDFImage = "/carbon_document-pdf.png";

const Partners: FC<PartnersProps> = ({
  title,
  description,
  data,
  sidebars,
}) => {
  const [active, setActive] = useState("active");

  const HandlAct = () => {
    setActive("active");
  };
  const HandlPrivate = () => {
    setActive("active2");
  };
  const { t } = useTranslation();
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
          <div>
            {data.length > 0 &&
              data.map((item: any, idx: any) => (
                <SponsrBlock key={idx}>
                  <div>
                    {/* <Image src={"/sp.png"} width={200} height={200} /> */}
                    <ImageCard>
                      <img src={item.image} alt={item.title} />
                    </ImageCard>
                  </div>
                  <div>
                    <SponsorTitle>{item.title}</SponsorTitle>
                    <SponsorTitleItem>
                      {parse(item.description)}
                    </SponsorTitleItem>
                  </div>
                </SponsrBlock>
              ))}
          </div>

          <AboutNav sidebars={sidebars} />
        </MissionContent>
      </MissionBody>
    </>
  );
};

export default Partners;
