import {
  MissionBody,
  MissionNav,
  MissionNavItem,
  MissionContent,
  MissionContentTitle,
  MissionContentAbout,
  MissionContentAbItem,
} from "../about/mission/Mission.e";
import Link from "next/dist/client/link";
import parse from "html-react-parser";
import {
  ContainerHero,
  HeroBgItem,
  PageHeading,
  PageText,
} from "../yur-face-page/hero-bg/hero-bg.e";
import { GWrapper } from "../../styles/global-styles.e";
import { AboutNav, InviteCooperationForm, PartnersComp } from "../common";
import { useTranslation } from "react-i18next";
import { BanksProps } from "./banks.t";
import { FC } from "react";
// import { Link } from "@mui/icons-material";
const main_image = "/slider1.jpg";
const BanksComp: FC<BanksProps> = ({ title, description, data }) => {
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
          <div>
            {data?.content.length > 0 &&
              data.content.map((item: any, idx: any) => (
                <MissionContentAbItem key={idx}>
                  <MissionContentTitle>{item.title} </MissionContentTitle>
                  {parse(item.text)}
                </MissionContentAbItem>
              ))}
          </div>
          <PartnersComp data={data?.call_center} />
        </MissionContent>
        <InviteCooperationForm />
      </MissionBody>
    </>
  );
};

export default BanksComp;
