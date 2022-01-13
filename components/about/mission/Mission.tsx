import { FC } from "react";
import type { NextPage } from "next";
import {MissionProps} from './Mission.t'
import {MissionBody,
        MissionNav,
        MissionNavItem,
        MissionContent,
        MissionContentTitle,
        MissionContentAbout,
        MissionContentAbItem
        } from './Mission.e'
import Link from "next/dist/client/link";
import { ContainerHero, HeroBgItem, PageHeading, PageText } from "../../yur-face-page/hero-bg/hero-bg.e";
import { GWrapper } from "../../../styles/global-styles.e";
import BreadcrumbsBlock from "../../common/bread-crumbs/Breadcrumbs";
import {AboutNav} from '../../common'
import { useTranslation } from "react-i18next";
// import { Link } from "@mui/icons-material";
const main_image = '/slider1.jpg'
const MissionComp: FC<MissionProps> = ({title,description}) => {
const {t} = useTranslation()
   
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
        <MissionContentTitle>{title} </MissionContentTitle>
        <MissionContentAbout>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo consectetur est facilisis tristique dolor. Congue massa vitae feugiat egestas cras tempus. Ac proin lacus id placerat quis nunc, leo pellentesque. Eros, etiam dui risus non massa tortor at eros. Varius nulla magnis habitant feugiat tortor.</MissionContentAbout>
          <MissionContentAbItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo consectetur est<br/> facilisis tristique dolor.`</MissionContentAbItem>
          <MissionContentAbItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo consectetur est<br/> facilisis tristique dolor.`</MissionContentAbItem>
          <MissionContentAbItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo consectetur est<br/> facilisis tristique dolor.`</MissionContentAbItem>
          <MissionContentAbItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo consectetur est<br/> facilisis tristique dolor.`</MissionContentAbItem>
        <MissionContentAbout>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo consectetur est facilisis tristique dolor. Congue massa vitae feugiat egestas cras tempus. Ac proin lacus id placerat quis nunc, leo pellentesque. Eros, etiam dui risus non massa tortor at eros. Varius nulla magnis habitant feugiat tortor.</MissionContentAbout>
          <MissionContentAbItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo consectetur est<br/> facilisis tristique dolor.`</MissionContentAbItem>
          <MissionContentAbItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo consectetur est<br/> facilisis tristique dolor.`</MissionContentAbItem>
          <MissionContentAbItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo consectetur est<br/> facilisis tristique dolor.`</MissionContentAbItem>
          <MissionContentAbItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo consectetur est <br/>facilisis tristique dolor.`</MissionContentAbItem>

      </div>
        <AboutNav/>
      </MissionContent>
     
    </MissionBody>
  </>
   
    
  );


};

export default MissionComp;
