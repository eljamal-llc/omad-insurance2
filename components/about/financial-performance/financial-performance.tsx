import { FC, useState } from "react";
import type { NextPage } from "next";
import {FinancialPerformanceProps }from './financial-performance.t'
import Link from "next/dist/client/link";
import { ContainerHero, HeroBgItem, PageHeading, PageText } from "../../yur-face-page/hero-bg/hero-bg.e";
import { GWrapper } from "../../../styles/global-styles.e";
import BreadcrumbsBlock from "../../common/bread-crumbs/Breadcrumbs";
import { MissionBody, MissionContent, MissionNav, MissionNavItem } from "../mission/Mission.e";
import { SectionTitle, MainBtn , AboutNav } from "../../common";
import { useTranslation } from "react-i18next";
import { FinancialYears ,FinancialBlock, FinancialBlockTitle, FinicialBloclContent, DownloadBlock, FinicialP, DwBtnBlock, DwBlockBorder} from "./financial-performance.e";
import Image from "next/image";
// import PDFImage from "../../../../assets/images/about/carbon_document-pdf.png";


const main_image = '/slider1.jpg'
const PDFImage = '/carbon_document-pdf.png'
const FinancialPerformance: FC<FinancialPerformanceProps> = ({title,description}) => {

   
  // console.log("inner ->>>>", data[0]);
  const [active , setActive ] = useState('active')

  const HandlAct = () =>{
    setActive('active')
  }
  const HandlPrivate = () =>{
    setActive('active2')
  }
  const {t} = useTranslation()
  return (
  <>
    <ContainerHero imgUrl={main_image}>
      <GWrapper>
        <HeroBgItem>
          <BreadcrumbsBlock url2={`/about`} url3={'financial-performance'}  link1="Главная" link2='О нас'link3={t('common:Financial_performance')}/>
          <PageHeading>{title}</PageHeading>
          <PageText>{description}</PageText>
        </HeroBgItem>
      </GWrapper>
    </ContainerHero>
    <MissionBody>
      <MissionContent>
        <div>
          <FinancialBlock>
            <FinancialYears onClick={HandlAct} className={active == 'active' ? 'active' : ''}>
                <span>2020 год</span>
            </FinancialYears>
            <FinancialYears onClick={HandlPrivate} className={active == 'active2' ?  'active' : " "}>
                <span>2021 год</span>
            </FinancialYears>
            
          </FinancialBlock>
          <FinancialBlockTitle>Консолидированная финансовая отчетность</FinancialBlockTitle>
          <FinicialBloclContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo consectetur est facilisis tristique dolor. Congue massa vitae feugiat egestas cras tempus. Ac proin lacus id placerat quis nunc, leo pellentesque. Eros, etiam dui risus non massa tortor at eros. Varius nulla magnis habitant feugiat tortor.</FinicialBloclContent>
          <DwBlockBorder>
            <DownloadBlock>
              <Image src={PDFImage} alt='s' width={100} height={100}/>
              <FinicialBloclContent>Консолидированная финансовая отчетность за 2020 год.pdf <FinicialP>2.32 МБ</FinicialP> <FinicialP>Обновлено 24.05.2021 в 14:00</FinicialP></FinicialBloclContent>
            </DownloadBlock>
            <DwBtnBlock>
              <MainBtn onClass="download" text={t('common:Download')} url="/" />
            </DwBtnBlock>
          </DwBlockBorder>
          <DwBlockBorder>
          <FinancialBlockTitle>Отчетность по ГОС стандартам</FinancialBlockTitle>
            <DownloadBlock>
              <Image src={PDFImage} alt='s' width={100} height={100}/>
              <FinicialBloclContent>Консолидированная финансовая отчетность за 2020 год.pdf <FinicialP>2.32 МБ</FinicialP> <FinicialP>Обновлено 24.05.2021 в 14:00</FinicialP></FinicialBloclContent>
              <Image src={PDFImage} alt='s' width={100} height={100}/>
              <FinicialBloclContent>Консолидированная финансовая отчетность за 2020 год.pdf <FinicialP>2.32 МБ</FinicialP> <FinicialP>Обновлено 24.05.2021 в 14:00</FinicialP></FinicialBloclContent>

            </DownloadBlock>
            <DwBtnBlock>
              <MainBtn onClass="download" text={t('common:Download')} url="/" />
            </DwBtnBlock>
          </DwBlockBorder>
         
        </div>
        <AboutNav/>
      </MissionContent>
    </MissionBody>
  </>
   
    
  );


};

export default FinancialPerformance;
