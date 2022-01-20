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
// import { Link } from "@mui/icons-material";
const main_image = '/slider1.jpg'
const AgentsBrokers: FC<AgentsBrokProps> = ({description, title}) => {
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
      <MissionContentAbItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo consectetur est facilisis<br/>  tristique dolor.`</MissionContentAbItem>
      <MissionContentAbItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo consectetur est facilisis<br/>  tristique dolor.`</MissionContentAbItem>
      <MissionContentAbItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo consectetur est facilisis<br/>  tristique dolor.`</MissionContentAbItem>
      <MissionContentAbItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo consectetur est facilisis<br/>  tristique dolor.`</MissionContentAbItem>
      <MissionContentAbItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo consectetur est facilisis <br/> tristique dolor.`</MissionContentAbItem>
      <MissionContentTitle>Что предлагает компания </MissionContentTitle>
      <p>Оцените преимущества работы страховым агентом в нашей Компании</p>

  </div>
    {/* <PartnersComp/> */}
  </MissionContent>
    {/* <InviteCooperationForm  /> */}
</MissionBody>
</>


);


};

export default AgentsBrokers;