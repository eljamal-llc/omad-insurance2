import { FC } from "react";
import type { NextPage } from "next";
import {requisitesProps} from './requisites.t'
import {MissionBody,
        MissionNav,
        MissionNavItem,
        MissionContent,
        MissionContentTitle,
        MissionContentAbout,
        MissionContentAbItem
        } from '../mission/Mission.e'
import Link from "next/dist/client/link";
import { ContainerHero, HeroBgItem, PageHeading, PageText } from "../../yur-face-page/hero-bg/hero-bg.e";
import { GWrapper } from "../../../styles/global-styles.e";
import BreadcrumbsBlock from "../../common/bread-crumbs/Breadcrumbs";
import {AboutNav} from '../../common'
import { RequisitesTable, RequisitesTableText } from "./requisites.e";
// import { Link } from "@mui/icons-material";
const main_image = '/slider1.jpg'
const Requisites: FC<requisitesProps> = ({title,description}) => {

   
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
      <RequisitesTable>
        <MissionContentAbout>Наименование</MissionContentAbout>
        <RequisitesTableText>Общество с ограниченной ответственностью «Страховая Компания ОMAD»</RequisitesTableText>
          
      </RequisitesTable>
      <RequisitesTable>
        <MissionContentAbout>Сокращенное наименование</MissionContentAbout>
        <RequisitesTableText>ООО «СК «ОMAD»</RequisitesTableText>
      </RequisitesTable>
      <RequisitesTable>
        <MissionContentAbout>Сокращенное наименование</MissionContentAbout>
        <RequisitesTableText>ООО «СК «ОMAD»</RequisitesTableText>
      </RequisitesTable><RequisitesTable>
        <MissionContentAbout>Сокращенное наименование</MissionContentAbout>
        <RequisitesTableText>ООО «СК «ОMAD»</RequisitesTableText>
      </RequisitesTable>
      

      </div>
        <AboutNav/>
      </MissionContent>
     
    </MissionBody>
  </>
   
    
  );


};

export default Requisites;
