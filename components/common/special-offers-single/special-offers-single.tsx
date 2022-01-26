import { FC } from "react";
import type { NextPage } from "next";
import { SpecialOffersSingleProps } from "./special-offers-single.t";
import parse from "html-react-parser";
import {
  MissionBody,
  MissionNav,
  MissionNavItem,
  MissionContent,
  MissionContentTitle,
  MissionContentAbout,
  MissionContentAbItem,
} from "../../about/mission/Mission.e";
import Link from "next/dist/client/link";
import {
  ContainerHero,
  HeroBgItem,
  PageHeading,
  PageText,
} from "../../yur-face-page/hero-bg/hero-bg.e";
import { GWrapper } from "../../../styles/global-styles.e";
import BreadcrumbsBlock from "../../common/bread-crumbs/Breadcrumbs";
import Image from "next/dist/client/image";
import { AboutNav } from "../../common";
import { useTranslation } from "react-i18next";
import { PageTitle, PageDes, MiniTitle, CardBlock, HighBlock, Kopite, SpecBlock, CenterTitle, Uslovs, CardTitle } from "./special-offers-single.e";
// import { Link } from "@mui/icons-material";
const main_image = "/slider1.jpg";
const SpecialOffersSingle: FC<SpecialOffersSingleProps> = ({
  title,
  description,
}) => {
  const { t } = useTranslation();

  // console.log("inner ->>>>", data[0]);

  return (
    <>
      {/* <ContainerHero imgUrl={main_image}>
        <GWrapper>
          <HeroBgItem>
            <PageHeading>{title}</PageHeading>
            <PageText>{description}</PageText>
          </HeroBgItem>
        </GWrapper>
      </ContainerHero> */}
      <SpecBlock>
        {/* <MissionContent>
            <div>
              <MissionContentTitle>{title}</MissionContentTitle>
              <MissionContentAbout></MissionContentAbout>
              <MissionContentAbItem>
              </MissionContentAbItem>
            </div>
        </MissionContent> */}
        <HighBlock>
            <Kopite>
                <PageTitle>Копите мили «Аэрофлот Бонус»</PageTitle>
                <PageDes>Теперь участники программы «Аэрофлот Бонус» могут получать мили при оформлении полиса КАСКО, полиса выезжающих за рубеж, а также при страховании имущества на сайте страховой компании «Согласие» и во всех офисах продаж.</PageDes>
                <MiniTitle>Условия начислений:</MiniTitle>
                <Uslovs>1 миля за каждые потраченные 25 ₽ при оформлении полиса страхования выезжающих за рубеж</Uslovs>
                <Uslovs>1 миля за каждые потраченные 25 ₽ при оформлении полиса страхования выезжающих за рубеж</Uslovs>
                <Uslovs>1 миля за каждые потраченные 25 ₽ при оформлении полиса страхования выезжающих за рубеж</Uslovs>
                <Uslovs>Мили за оформление первичного полиса КАСКО начисляются только при обращении в офис продаж.</Uslovs>
                <Uslovs>Для начисления миль предъявите Вашу карту участника программы «Аэрофлот Бонус» в офисах продаж или введите номер карты на сайте страховой компании «OMAD».</Uslovs>

            </Kopite>

            <CardBlock>
                <Image src={main_image}  height='300px' width='500' />
                <CardTitle>Копите мили «Аэрофлот Бонус»</CardTitle>
                <PageDes>Теперь участники программы «Аэрофлот Бонус» могут получать мили при оформлении полиса в страховой компании «Согласие»</PageDes>
            </CardBlock>
        </HighBlock>
        <CenterTitle>*Перечень партнеров можно уточнить в контактном центре СК «OMAD» 8 800 755 00 01</CenterTitle>
        
      </SpecBlock>
    </>
  );
};

export default SpecialOffersSingle;
