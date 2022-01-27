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
import { AggentsTable, AgentsTd, AgentsTR, TableDes, TitleTable, DesTitle, SecontTable, NumTable, TdTitle, ResponseTable } from './agents-brokers.e';
// import { Link } from "@mui/icons-material";
const main_image = '/slider1.jpg'
const AgentsBrokers: FC<AgentsBrokProps> = ({description, title}) => {
const {t} = useTranslation()
const yes = '/yes.png'
const no  = '/no.png'
const pdf = '/pdf.png'
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
          <AgentsTR className='none'>
            <AgentsTd  className='oneT '>&nbsp; <TitleTable>Преимуществ</TitleTable>    </AgentsTd>
            <AgentsTd  className='twoT '>&nbsp;  <TableDes className='title'> Стандартный агентский договор</TableDes>  </AgentsTd>
            <AgentsTd className='threeT '>&nbsp; <TableDes className='title'>Онлайн  агентский договор</TableDes>  </AgentsTd>
          </AgentsTR>
          <AgentsTR>
            <AgentsTd  className='oneT'>&nbsp; <TitleTable> Свободный график работы</TitleTable> <DesTitle>Вы самостоятельно определяет время и объем работы</DesTitle> </AgentsTd>
            <AgentsTd  className='twoT'>&nbsp;  <TdTitle><Image  src={yes} height={40} width={40}/> </TdTitle></AgentsTd>
            <AgentsTd className='threeT'>&nbsp;   <TdTitle><Image  src={yes} height={40} width={40}/> </TdTitle></AgentsTd>
          </AgentsTR>
          <AgentsTR>
            <AgentsTd  className='oneT'>&nbsp; <TitleTable> Регулярные тренинги и профессиональное обучение</TitleTable> <DesTitle>После заключения агентского договора предоставляются материалы для изучения продуктов Компании и возможность прохождения бесплатного обучения, в т.ч. дистанционно</DesTitle> </AgentsTd>
            <AgentsTd  className='twoT'>&nbsp;  <TdTitle><Image  src={yes} height={40} width={40}/> </TdTitle></AgentsTd>
            <AgentsTd className='threeT'>&nbsp;   <TdTitle><Image  src={yes} height={40} width={40}/> </TdTitle></AgentsTd>
          </AgentsTR>
          <AgentsTR>
            <AgentsTd  className='oneT'>&nbsp; <TitleTable> Доход</TitleTable> <DesTitle>После заключения агентского договора предоставляются материалы для изучения продуктов Компании и возможность прохождения бесплатного обучения, в т.ч. дистанционно</DesTitle> </AgentsTd>
            <AgentsTd  className='twoT'>&nbsp;  <TdTitle><Image  src={yes} height={40} width={40}/> </TdTitle></AgentsTd>
            <AgentsTd className='threeT'>&nbsp;   <TdTitle><Image  src={no} height={40} width={40}/> </TdTitle></AgentsTd>
          </AgentsTR>
          <AgentsTR>
            <AgentsTd  className='oneT'>&nbsp; <TitleTable> Удобный документооборот с использованием электронной подписи</TitleTable> <DesTitle>Подписание отчетов, актов выполненных работ с помощью электронной подписи. Компания оказывает полную поддержку по оформлению электронной подписи.</DesTitle> </AgentsTd>
            <AgentsTd  className='twoT'>&nbsp;  <TdTitle><Image  src={yes} height={40} width={40}/> </TdTitle></AgentsTd>
            <AgentsTd className='threeT'>&nbsp;   <TdTitle><Image  src={yes} height={40} width={40}/> </TdTitle></AgentsTd>
          </AgentsTR>
          <AgentsTR>
            <AgentsTd  className='oneT'>&nbsp; <TitleTable> Свободный график работы</TitleTable> <DesTitle>Вы самостоятельно определяет время и объем работы</DesTitle> </AgentsTd>
            <AgentsTd  className='twoT'>&nbsp;  <TdTitle><Image  src={yes} height={40} width={40}/> </TdTitle></AgentsTd>
            <AgentsTd className='threeT'>&nbsp;   <TdTitle><Image  src={yes} height={40} width={40}/> </TdTitle></AgentsTd>
          </AgentsTR>
          <AgentsTR>
            <AgentsTd  className='oneT'>&nbsp; <TitleTable> Свободный график работы</TitleTable> <DesTitle>Вы самостоятельно определяет время и объем работы</DesTitle> </AgentsTd>
            <AgentsTd  className='twoT'>&nbsp;  <TdTitle><Image  src={yes} height={40} width={40}/> </TdTitle></AgentsTd>
            <AgentsTd className='threeT'>&nbsp;   <TdTitle><Image  src={no} height={40} width={40}/> </TdTitle></AgentsTd>
          </AgentsTR>
          <AgentsTR>
            <AgentsTd  className='oneT'>&nbsp; <TitleTable> Свободный график работы</TitleTable> <DesTitle>Вы самостоятельно определяет время и объем работы</DesTitle> </AgentsTd>
            <AgentsTd  className='twoT'>&nbsp;  <TdTitle>Все </TdTitle></AgentsTd>
            <AgentsTd className='threeT'>&nbsp;   <TdTitle>Список продуктов ограничен</TdTitle></AgentsTd>
          </AgentsTR>
          <AgentsTR>
            <AgentsTd  className='oneT'>&nbsp; <TitleTable> Свободный график работы</TitleTable> <DesTitle>Вы самостоятельно определяет время и объем работы</DesTitle> </AgentsTd>
            <AgentsTd  className='twoT'>&nbsp;  <TdTitle><Image  src={yes} height={40} width={40}/> </TdTitle></AgentsTd>
            <AgentsTd className='threeT'>&nbsp;   <TdTitle><Image  src={yes} height={40} width={40}/> </TdTitle></AgentsTd>
          </AgentsTR>
          <AgentsTR>
            <AgentsTd  className='oneT'>&nbsp; <TitleTable> Свободный график работы</TitleTable> <DesTitle>Вы самостоятельно определяет время и объем работы</DesTitle> </AgentsTd>
            <AgentsTd  className='twoT'>&nbsp;  <TdTitle><Image  src={yes} height={40} width={40}/> </TdTitle></AgentsTd>
            <AgentsTd className='threeT'>&nbsp;   <TdTitle><Image  src={yes} height={40} width={40}/> </TdTitle></AgentsTd>
          </AgentsTR>
          <AgentsTR>
            <AgentsTd  className='oneT'>&nbsp; <TitleTable> Свободный график работы</TitleTable> <DesTitle>Вы самостоятельно определяет время и объем работы</DesTitle> </AgentsTd>
            <AgentsTd  className='twoT'>&nbsp;  <TdTitle><Image  src={yes} height={40} width={40}/> </TdTitle></AgentsTd>
            <AgentsTd className='threeT'>&nbsp;   <TdTitle><Image  src={yes} height={40} width={40}/> </TdTitle></AgentsTd>
          </AgentsTR>
          <AgentsTR>
            <AgentsTd  className='oneT'>&nbsp; <TitleTable> Свободный график работы</TitleTable> <DesTitle>Вы самостоятельно определяет время и объем работы</DesTitle> </AgentsTd>
            <AgentsTd  className='twoT'>&nbsp;  <TdTitle><Image  src={yes} height={40} width={40}/> </TdTitle></AgentsTd>
            <AgentsTd className='threeT'>&nbsp;   <TdTitle><Image  src={yes} height={40} width={40}/> </TdTitle></AgentsTd>
          </AgentsTR>
         
          
        </tbody>
      </AggentsTable>
      <ResponseTable >
        <tbody>
          <AgentsTR >
            <AgentsTd ><TableDes className='title'>Регулярные тренинги и профессиональное обучение </TableDes></AgentsTd>
          </AgentsTR>
          <AgentsTR >
            <AgentsTd ><TdTitle > Стандартный агентский договор </TdTitle><СenterМ><Image  src={yes} height={40} width={40}/></СenterМ></AgentsTd>
          </AgentsTR>
          <AgentsTR >
            <AgentsTd ><TableDes className='title'>Регулярные тренинги и профессиональное обучение </TableDes></AgentsTd>
          </AgentsTR>
          <AgentsTR >
            <AgentsTd ><TdTitle > Стандартный агентский договор </TdTitle><СenterМ><Image  src={yes} height={40} width={40}/></СenterМ></AgentsTd>
          </AgentsTR> <AgentsTR >
            <AgentsTd ><TableDes className='title'>Регулярные тренинги и профессиональное обучение </TableDes></AgentsTd>
          </AgentsTR>
          <AgentsTR >
            <AgentsTd ><TdTitle > Стандартный агентский договор </TdTitle><СenterМ><Image  src={yes} height={40} width={40}/></СenterМ></AgentsTd>
          </AgentsTR>
        </tbody>
    </ResponseTable>
      <MissionContentTitle>Порядок заключения агентского договора </MissionContentTitle>
      <SecontTable >
        <tbody>
          <AgentsTR >
            <AgentsTd ><TableDes className='title'>Стандартный агентский договор</TableDes></AgentsTd>
            <AgentsTd ><TableDes className='title'>Онлайн агентский договор</TableDes></AgentsTd>
          </AgentsTR>
          <AgentsTR >
            <AgentsTd ><TdTitle className='Nocenter'><NumTable>1</NumTable>Отправьте заявку:</TdTitle><DesTitle>Для взаимодействия с вами будет определен персональный куратор, который оперативно свяжется с вами по указанному номеру телефона или по электронной почте, предоставит всю необходимую информацию, ответит на ваши вопросы.</DesTitle></AgentsTd>
            <AgentsTd ><TdTitle className='Nocenter'><NumTable>1</NumTable>Отправьте заявку:</TdTitle><DesTitle>Для взаимодействия с вами будет определен персональный куратор, который оперативно свяжется с вами по указанному номеру телефона или по электронной почте, предоставит всю необходимую информацию, ответит на ваши вопросы.</DesTitle></AgentsTd>
          </AgentsTR>
          <AgentsTR >
            <AgentsTd ><TdTitle className='Nocenter'><NumTable>2</NumTable>Отправьте заявку:</TdTitle><DesTitle>Для взаимодействия с вами будет определен персональный куратор, который оперативно свяжется с вами по указанному номеру телефона или по электронной почте, предоставит всю необходимую информацию, ответит на ваши вопросы.</DesTitle></AgentsTd>
            <AgentsTd ><TdTitle className='Nocenter'><NumTable>2</NumTable>Отправьте заявку:</TdTitle><DesTitle>Для взаимодействия с вами будет определен персональный куратор, который оперативно свяжется с вами по указанному номеру телефона или по электронной почте, предоставит всю необходимую информацию, ответит на ваши вопросы.</DesTitle></AgentsTd>
          </AgentsTR>
          <AgentsTR >
            <AgentsTd ><TdTitle className='Nocenter'><NumTable>3</NumTable>Отправьте заявку:</TdTitle><DesTitle>Для взаимодействия с вами будет определен персональный куратор, который оперативно свяжется с вами по указанному номеру телефона или по электронной почте, предоставит всю необходимую информацию, ответит на ваши вопросы.</DesTitle></AgentsTd>
            <AgentsTd ><TdTitle className='Nocenter'><NumTable>3</NumTable>Отправьте заявку:</TdTitle><DesTitle>Для взаимодействия с вами будет определен персональный куратор, который оперативно свяжется с вами по указанному номеру телефона или по электронной почте, предоставит всю необходимую информацию, ответит на ваши вопросы.</DesTitle></AgentsTd>
          </AgentsTR>
        </tbody>
    </SecontTable>
    <TdTitle className='Nocenter'>Подробную информацию и ответы на вопросы о сотрудничестве со страховой компанией «Согласие» вы можете получить: по телефону +7 495 739-01-01</TdTitle>
    <TdTitle className='Nocenter'>Базовый стандарт защиты прав и интересов физических и юридических лиц - получателей финансовых услуг, оказываемых членами саморегулируемых организаций, объединяющих страховые организации.</TdTitle>
    <TdTitle className='Nocenter'>Базовый стандарт совершения страховыми организациями операций  на финансовом рынке.</TdTitle>
    <TdTitle className='Nocenter'><Image src={pdf} height={87} width={90}/>&nbsp;&nbsp; Презентация для агентов СК Согласие 5.93 МБ</TdTitle>
   
    <InviteCooperationForm  />

  </div>
    {/* <PartnersComp/> */}
  </MissionContent>
    {/* <InviteCooperationForm  /> */}
</MissionBody>
</>


);


};

export default AgentsBrokers;