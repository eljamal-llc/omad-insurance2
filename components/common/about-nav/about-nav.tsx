import { FC } from "react";
import type { NextPage } from "next";
import {AboutNavProps} from './about-nav.t'
import Link from "next/dist/client/link";

import { MissionNav, MissionNavItem } from "../../about/mission/Mission.e";
// import { Link } from "@mui/icons-material";
const main_image = '/slider1.jpg'
const AboutNav: FC<AboutNavProps> = () => {

   
  // console.log("inner ->>>>", data[0]);

  return (
  <>
  
        <MissionNav>
          <Link href={'/about/mission'}>
              <MissionNavItem  >Миссия</MissionNavItem>
        </Link> 
          <Link href={'/about/values'}>
              <MissionNavItem>  Ценности</MissionNavItem>
        </Link>
          <Link href={'/about/social-responsibility'}>
              <MissionNavItem>  Социальная ответственность</MissionNavItem>
        </Link> 
          <Link href={'/about/financial-performance'}>
              <MissionNavItem>  Финансовые показатели</MissionNavItem>
            </Link> 
          <Link href={'/'}>
               <MissionNavItem>  Политика безопасности</MissionNavItem>
            </Link>
          <Link href={'/about/requisites'}>
              <MissionNavItem>  Реквизиты</MissionNavItem>
            </Link> 
          <Link href={'/'}>
              <MissionNavItem>  Пресс-центр</MissionNavItem>
            </Link> 
          <Link href={'/'}>
              <MissionNavItem>  Выплаты</MissionNavItem>
            </Link> 
          <Link href={'/about/Insurance-rules'}>
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
          {/* <Link href={'/'}>
              <MissionNavItem>  Ассоциации и пулы</MissionNavItem>
            </Link>  */}
          <Link href={'/'}>
              <MissionNavItem>  Партнеры</MissionNavItem>
            </Link> 
          <Link href={'/'}>
              <MissionNavItem>  Лицензии</MissionNavItem>
            </Link> 
          {/* <Link href={'/'}>
              <MissionNavItem>  Рейтинги</MissionNavItem>
            </Link>  */}
          {/* <Link href={'/'}>
              <MissionNavItem>  Награды</MissionNavItem>
            </Link>  */}
          {/* <Link href={'/'}>
              <MissionNavItem>  Благодарности</MissionNavItem>
            </Link> 
          <Link href={'/'}>
               <MissionNavItem>  Спецпроекты</MissionNavItem>
            </Link> */}
        </MissionNav>
     
  </>
   
    
  );


};

export default AboutNav;
