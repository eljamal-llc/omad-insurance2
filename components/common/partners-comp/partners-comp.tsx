import { FC, useState } from "react";
import type { NextPage } from "next";

import Link from "next/dist/client/link";
import {
    ComponentBody,
    ComponentHigh,
    CompHightTitle,
    HowFace,
    FaceFiz,
    FaceYur,
    CompHighInput,
    ComponentLow,
    ComponentLowTitile,
    LowDes,
    BTNblock

} from './partners-comp.e'
import { SectionTitle, MainBtn  } from "../../common";
import Image from "next/dist/client/image";
import { MissionNav, MissionNavItem } from "../../about/mission/Mission.e";
import { PartnersCompProps } from "./partners-comp.t";
// import { Link } from "@mui/icons-material";
const main_image = '/slider1.jpg'
const PartnersComp: FC<PartnersCompProps> = () => {
const [isAct , setAct] = useState('active')
const [YurAct , setYur] =  useState('')
  // console.log("inner ->>>>", data[0]);
const hanY = ()=>{
    setYur('activeY')
    setAct('')
}
const hanF =()=>{
    setYur('')
    setAct('active')
}
  return (
  <>
    <ComponentBody>
        <ComponentHigh>
            <CompHightTitle>Проверить агента или брокера</CompHightTitle>
            <HowFace>
                <FaceFiz  onClick={hanF} className={isAct}>Физ.лицо</FaceFiz>
                <FaceYur onClick={hanY} className={YurAct}>Юр.лицо</FaceYur><br/>
                
            </HowFace>
            <CompHighInput
                  placeholder="Иванов Иван Иванович"
                  label={'ФИО агента'}
                />
                <BTNblock>
                    <MainBtn  onClass="white" text={'Поиск'} url="/"/>

                </BTNblock>
        </ComponentHigh>

        <ComponentLow>
            <ComponentLowTitile>Получить подробную информацию и ответы на вопросы</ComponentLowTitile>
                    <Image
                        src='/phone.png'
                        width={95}
                        height={93}
                    />
                    <LowDes>Свяжитесь с менеджером по телефону +7 495 739-01-01</LowDes>
                    <Image
                        src='/pochta.png'
                        width={90}
                        height={70}
                    />
                    <LowDes>
                    Направьте письмо по электронной почте intour@soglasie.ru
                    </LowDes>
        </ComponentLow>
    </ComponentBody>
       
  </>
   
    
  );


};

export default PartnersComp;
