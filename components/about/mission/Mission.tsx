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
import Navlink from "next/Link";
import { ContainerHero, HeroBgItem, PageHeading, PageText } from "../../yur-face-page/hero-bg/hero-bg.e";
import { GWrapper } from "../../../styles/global-styles.e";
import BreadcrumbsBlock from "../../common/bread-crumbs/Breadcrumbs";
// import { Link } from "@mui/icons-material";
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
        <MissionNav>
          <Navlink href={'/about/mission'}>
              <MissionNavItem  >Миссия</MissionNavItem></Navlink> 
          <Navlink href={'/about/values'}>
              <MissionNavItem>  Ценности</MissionNavItem></Navlink>
          <Navlink href={'/'}>
              <MissionNavItem>  Социальная ответственность</MissionNavItem></Navlink> 
          <Navlink href={'/'}>
              <MissionNavItem>  Финансовые показатели</MissionNavItem></Navlink> 
          <Navlink href={'/'}>
               <MissionNavItem>  Политика безопасности</MissionNavItem></Navlink>
          <Navlink href={'/'}>
              <MissionNavItem>  Закупки</MissionNavItem></Navlink> 
          <Navlink href={'/'}>
              <MissionNavItem>  Пресс-центр</MissionNavItem></Navlink> 
          <Navlink href={'/'}>
              <MissionNavItem>  Выплаты</MissionNavItem></Navlink> 
          <Navlink href={'/'}>
              <MissionNavItem>  Правила страхования</MissionNavItem></Navlink> 
          <Navlink href={'/'}>
              <MissionNavItem>  Перестрахование</MissionNavItem></Navlink> 
          <Navlink href={'/'}>
              <MissionNavItem>  Виды страхования</MissionNavItem></Navlink> 
          <Navlink href={'/'}>
              <MissionNavItem>  Руководство и участники</MissionNavItem></Navlink> 
          <Navlink href={'/'}>
              <MissionNavItem>  Ассоциации и пулы</MissionNavItem></Navlink> 
          <Navlink href={'/'}>
              <MissionNavItem>  Партнеры</MissionNavItem></Navlink> 
          <Navlink href={'/'}>
              <MissionNavItem>  Лицензии</MissionNavItem></Navlink> 
          <Navlink href={'/'}>
              <MissionNavItem>  Рейтинги</MissionNavItem></Navlink> 
          <Navlink href={'/'}>
              <MissionNavItem>  Награды</MissionNavItem></Navlink> 
          <Navlink href={'/'}>
              <MissionNavItem>  Благодарности</MissionNavItem></Navlink> 
          <Navlink href={'/'}>
               <MissionNavItem>  Спецпроекты</MissionNavItem></Navlink>
        </MissionNav>
      </MissionContent>
     
    </MissionBody>
  </>
   
    
  );


};

export default MissionComp;
