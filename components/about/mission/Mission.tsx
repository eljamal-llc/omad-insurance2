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
import Link from "next/dist/client/link";
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
          <Link href={'/about/mission'}>
              <MissionNavItem  >Миссия</MissionNavItem>
        </Link> 
          <Link href={'/about/values'}>
              <MissionNavItem>  Ценности</MissionNavItem>
        </Link>
          <Link href={'/'}>
              <MissionNavItem>  Социальная ответственность</MissionNavItem>
        </Link> 
          <Link href={'/'}>
              <MissionNavItem>  Финансовые показатели</MissionNavItem>
            </Link> 
          <Link href={'/'}>
               <MissionNavItem>  Политика безопасности</MissionNavItem>
            </Link>
          <Link href={'/'}>
              <MissionNavItem>  Закупки</MissionNavItem>
            </Link> 
          <Link href={'/'}>
              <MissionNavItem>  Пресс-центр</MissionNavItem>
            </Link> 
          <Link href={'/'}>
              <MissionNavItem>  Выплаты</MissionNavItem>
            </Link> 
          <Link href={'/'}>
              <MissionNavItem>  Правила страхования</MissionNavItem>
            </Link> 
          <Link href={'/'}>
              <MissionNavItem>  Перестрахование</MissionNavItem>
            </Link> 
          <Link href={'/'}>
              <MissionNavItem>  Виды страхования</MissionNavItem>
            </Link> 
          <Link href={'/'}>
              <MissionNavItem>  Руководство и участники</MissionNavItem>
            </Link> 
          <Link href={'/'}>
              <MissionNavItem>  Ассоциации и пулы</MissionNavItem>
            </Link> 
          <Link href={'/'}>
              <MissionNavItem>  Партнеры</MissionNavItem>
            </Link> 
          <Link href={'/'}>
              <MissionNavItem>  Лицензии</MissionNavItem>
            </Link> 
          <Link href={'/'}>
              <MissionNavItem>  Рейтинги</MissionNavItem>
            </Link> 
          <Link href={'/'}>
              <MissionNavItem>  Награды</MissionNavItem>
            </Link> 
          <Link href={'/'}>
              <MissionNavItem>  Благодарности</MissionNavItem>
            </Link> 
          <Link href={'/'}>
               <MissionNavItem>  Спецпроекты</MissionNavItem>
            </Link>
        </MissionNav>
      </MissionContent>
     
    </MissionBody>
  </>
   
    
  );


};

export default MissionComp;
