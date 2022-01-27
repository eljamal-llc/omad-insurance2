import {MissionBody,
    MissionNav,
    MissionNavItem,
    MissionContent,
    MissionContentTitle,
    MissionContentAbout,
    MissionContentAbItem
    } from '../about/mission/Mission.e'
import Link from "next/dist/client/link";
import { ContainerHero, HeroBgItem, PageHeading, PageText } from"../yur-face-page/hero-bg/hero-bg.e";
import { GWrapper } from "../../styles/global-styles.e";
import {AboutNav, InviteCooperationForm, PartnersComp} from '../common'
import { useTranslation } from "react-i18next";
// import { BanksProps } from './banks.t';
import {AgentsBrokProps} from './agents-brokers.t'
import { FC } from 'react';
import Image from 'next/dist/client/image';
import { AggentsTable, AgentsTd, AgentsTR, TableDes, TitleTable, DesTitle, SecontTable } from './agents-brokers.e';
// import { Link } from "@mui/icons-material";
const main_image = '/slider1.jpg'
const AgentsBrokers: FC<AgentsBrokProps> = ({description, title}) => {
const {t} = useTranslation()
const yes = '/yes.png'
const no  = '/no.png'
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
      <MissionContentAbItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo consectetur est facilisis<br/>  tristique dolor.`</MissionContentAbItem>
      <MissionContentAbItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo consectetur est facilisis<br/>  tristique dolor.`</MissionContentAbItem>
      <MissionContentAbItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo consectetur est facilisis<br/>  tristique dolor.`</MissionContentAbItem>
      <MissionContentAbItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo consectetur est facilisis<br/>  tristique dolor.`</MissionContentAbItem>
      <MissionContentAbItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo consectetur est facilisis <br/> tristique dolor.`</MissionContentAbItem>
      <MissionContentTitle>Что предлагает компания </MissionContentTitle>
      <p>Оцените преимущества работы страховым агентом в нашей Компании</p>
      <AggentsTable  >
        <tbody>
          <AgentsTR>
            <AgentsTd  className='oneT'>&nbsp; <TitleTable>Преимуществ</TitleTable>    </AgentsTd>
            <AgentsTd  className='twoT'>&nbsp;  <TableDes className='title'> Стандартный агентский договор</TableDes>  </AgentsTd>
            <AgentsTd className='threeT'>&nbsp; <TableDes className='title'>Онлайн  агентский договор</TableDes>  </AgentsTd>
          </AgentsTR>
          <AgentsTR>
            <AgentsTd  className='oneT'>&nbsp; <TitleTable> Свободный график работы</TitleTable> <DesTitle>Вы самостоятельно определяет время и объем работы</DesTitle> </AgentsTd>
            <AgentsTd  className='twoT'>&nbsp;  <TableDes><Image  src={yes} height={40} width={40}/> </TableDes></AgentsTd>
            <AgentsTd className='threeT'>&nbsp;   <TableDes><Image  src={yes} height={40} width={40}/> </TableDes></AgentsTd>
          </AgentsTR>
          <AgentsTR>
            <AgentsTd  className='oneT'>&nbsp; <TitleTable> Регулярные тренинги и профессиональное обучение</TitleTable> <DesTitle>После заключения агентского договора предоставляются материалы для изучения продуктов Компании и возможность прохождения бесплатного обучения, в т.ч. дистанционно</DesTitle> </AgentsTd>
            <AgentsTd  className='twoT'>&nbsp;  <TableDes><Image  src={yes} height={40} width={40}/> </TableDes></AgentsTd>
            <AgentsTd className='threeT'>&nbsp;   <TableDes><Image  src={yes} height={40} width={40}/> </TableDes></AgentsTd>
          </AgentsTR>
          <AgentsTR>
            <AgentsTd  className='oneT'>&nbsp; <TitleTable> Доход</TitleTable> <DesTitle>После заключения агентского договора предоставляются материалы для изучения продуктов Компании и возможность прохождения бесплатного обучения, в т.ч. дистанционно</DesTitle> </AgentsTd>
            <AgentsTd  className='twoT'>&nbsp;  <TableDes><Image  src={yes} height={40} width={40}/> </TableDes></AgentsTd>
            <AgentsTd className='threeT'>&nbsp;   <TableDes><Image  src={no} height={40} width={40}/> </TableDes></AgentsTd>
          </AgentsTR>
          <AgentsTR>
            <AgentsTd  className='oneT'>&nbsp; <TitleTable> Удобный документооборот с использованием электронной подписи</TitleTable> <DesTitle>Подписание отчетов, актов выполненных работ с помощью электронной подписи. Компания оказывает полную поддержку по оформлению электронной подписи.</DesTitle> </AgentsTd>
            <AgentsTd  className='twoT'>&nbsp;  <TableDes><Image  src={yes} height={40} width={40}/> </TableDes></AgentsTd>
            <AgentsTd className='threeT'>&nbsp;   <TableDes><Image  src={yes} height={40} width={40}/> </TableDes></AgentsTd>
          </AgentsTR>
          <AgentsTR>
            <AgentsTd  className='oneT'>&nbsp; <TitleTable> Свободный график работы</TitleTable> <DesTitle>Вы самостоятельно определяет время и объем работы</DesTitle> </AgentsTd>
            <AgentsTd  className='twoT'>&nbsp;  <TableDes><Image  src={yes} height={40} width={40}/> </TableDes></AgentsTd>
            <AgentsTd className='threeT'>&nbsp;   <TableDes><Image  src={yes} height={40} width={40}/> </TableDes></AgentsTd>
          </AgentsTR>
          <AgentsTR>
            <AgentsTd  className='oneT'>&nbsp; <TitleTable> Свободный график работы</TitleTable> <DesTitle>Вы самостоятельно определяет время и объем работы</DesTitle> </AgentsTd>
            <AgentsTd  className='twoT'>&nbsp;  <TableDes><Image  src={yes} height={40} width={40}/> </TableDes></AgentsTd>
            <AgentsTd className='threeT'>&nbsp;   <TableDes><Image  src={no} height={40} width={40}/> </TableDes></AgentsTd>
          </AgentsTR>
          <AgentsTR>
            <AgentsTd  className='oneT'>&nbsp; <TitleTable> Свободный график работы</TitleTable> <DesTitle>Вы самостоятельно определяет время и объем работы</DesTitle> </AgentsTd>
            <AgentsTd  className='twoT'>&nbsp;  <TableDes>Все </TableDes></AgentsTd>
            <AgentsTd className='threeT'>&nbsp;   <TableDes>Список продуктов ограничен</TableDes></AgentsTd>
          </AgentsTR>
          <AgentsTR>
            <AgentsTd  className='oneT'>&nbsp; <TitleTable> Свободный график работы</TitleTable> <DesTitle>Вы самостоятельно определяет время и объем работы</DesTitle> </AgentsTd>
            <AgentsTd  className='twoT'>&nbsp;  <TableDes><Image  src={yes} height={40} width={40}/> </TableDes></AgentsTd>
            <AgentsTd className='threeT'>&nbsp;   <TableDes><Image  src={yes} height={40} width={40}/> </TableDes></AgentsTd>
          </AgentsTR>
          <AgentsTR>
            <AgentsTd  className='oneT'>&nbsp; <TitleTable> Свободный график работы</TitleTable> <DesTitle>Вы самостоятельно определяет время и объем работы</DesTitle> </AgentsTd>
            <AgentsTd  className='twoT'>&nbsp;  <TableDes><Image  src={yes} height={40} width={40}/> </TableDes></AgentsTd>
            <AgentsTd className='threeT'>&nbsp;   <TableDes><Image  src={yes} height={40} width={40}/> </TableDes></AgentsTd>
          </AgentsTR>
          <AgentsTR>
            <AgentsTd  className='oneT'>&nbsp; <TitleTable> Свободный график работы</TitleTable> <DesTitle>Вы самостоятельно определяет время и объем работы</DesTitle> </AgentsTd>
            <AgentsTd  className='twoT'>&nbsp;  <TableDes><Image  src={yes} height={40} width={40}/> </TableDes></AgentsTd>
            <AgentsTd className='threeT'>&nbsp;   <TableDes><Image  src={yes} height={40} width={40}/> </TableDes></AgentsTd>
          </AgentsTR>
          <AgentsTR>
            <AgentsTd  className='oneT'>&nbsp; <TitleTable> Свободный график работы</TitleTable> <DesTitle>Вы самостоятельно определяет время и объем работы</DesTitle> </AgentsTd>
            <AgentsTd  className='twoT'>&nbsp;  <TableDes><Image  src={yes} height={40} width={40}/> </TableDes></AgentsTd>
            <AgentsTd className='threeT'>&nbsp;   <TableDes><Image  src={yes} height={40} width={40}/> </TableDes></AgentsTd>
          </AgentsTR>
         
          
        </tbody>
      </AggentsTable>
      <MissionContentTitle>Порядок заключения агентского договора </MissionContentTitle>
      <SecontTable >
        <tbody>
          <AgentsTR >
            <AgentsTd ><TableDes className='title'>Стандартный агентский договор</TableDes></AgentsTd>
            <AgentsTd ><TableDes className='title'>Онлайн агентский договор</TableDes></AgentsTd>
          </AgentsTR>
          <AgentsTR >
            <AgentsTd ></AgentsTd>
            <AgentsTd ></AgentsTd>
          </AgentsTR>
          <AgentsTR>
            <AgentsTd ></AgentsTd>
            <AgentsTd ></AgentsTd>
          </AgentsTR>
          <AgentsTR >
            <AgentsTd ></AgentsTd>
            <AgentsTd ></AgentsTd>
          </AgentsTR>
        </tbody>
    </SecontTable>
  </div>
    {/* <PartnersComp/> */}
  </MissionContent>
    {/* <InviteCooperationForm  /> */}
</MissionBody>
</>


);


};

export default AgentsBrokers;