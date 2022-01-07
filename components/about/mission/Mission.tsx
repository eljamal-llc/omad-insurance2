import { FC } from "react";
import type { NextPage } from "next";
import {MissionProps} from './Mission.t'

import { ContainerHero, HeroBgItem, PageHeading, PageText } from "../../yur-face-page/hero-bg/hero-bg.e";
import { GWrapper } from "../../../styles/global-styles.e";
import BreadcrumbsBlock from "../../common/bread-crumbs/Breadcrumbs";
const main_image = '/slider1.jpg'
const MissionComp: FC<MissionProps> = ({title,description}) => {

   
  // console.log("inner ->>>>", data[0]);

  return (
  <>
   <ContainerHero imgUrl={main_image}>
      <GWrapper>
        <HeroBgItem>
          <BreadcrumbsBlock />
          <PageHeading>{title}</PageHeading>
          <PageText>{description}</PageText>
        </HeroBgItem>
      </GWrapper>
    </ContainerHero>
    <h2>Missiya </h2>
  </>
   
    
  );


};

export default MissionComp;
