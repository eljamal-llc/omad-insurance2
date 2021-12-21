import { FC } from "react";
import { GWrapper } from "../../../styles/global-styles.e";
import { MtplAdventagesProps } from "./mtpl-advantages.t";

import {   
     MtplAdventagesHeading , 
     MtplAdventagesBlock,
     MtplAdventagesCard,
     MtplAdventagesCardHeading,
     MtplAdventagesCardText,
     MtplAdventagesInsurance,
     MtplAdventagesInsuranceHeading,
     MtplAdventagesInsuranceText,
     MtplAdventagesNubmer,
     NumText,
     NumberB,
     ImgBlock,
     MtplAdventagesInsuranceTwo,
     
} from './mtpl-advantages.e';
import NoutImg from '../../../assets/images/yur-page/singl-yur-img/nout.png'
import CarImg from '../../../assets/images/yur-page/singl-yur-img/car.png'
import Strelka from '../../../assets/images/yur-page/singl-yur-img/strlka.png'
import Image from 'next/image';
const MtplAdventages :FC<MtplAdventagesProps> =  (props : MtplAdventagesProps) =>{
    return (
        // <GWrapper>
        <>
        <MtplAdventagesHeading>Преимущества страхования ОСАГО онлайн</MtplAdventagesHeading>
            <MtplAdventagesBlock>
                <MtplAdventagesCard>
                    <MtplAdventagesCardHeading>Максимально онлайн</MtplAdventagesCardHeading>
                    <MtplAdventagesCardText>В OMAD основные процессы — от оформления до урегулирования — онлайн. Быстро и удобно</MtplAdventagesCardText>
                </MtplAdventagesCard>
                <MtplAdventagesCard>
                    <MtplAdventagesCardHeading>Максимально онлайн</MtplAdventagesCardHeading>
                    <MtplAdventagesCardText>В OMAD основные процессы — от оформления до урегулирования — онлайн. Быстро и удобно</MtplAdventagesCardText>
                </MtplAdventagesCard>
                <MtplAdventagesCard>
                    <MtplAdventagesCardHeading>Максимально онлайн</MtplAdventagesCardHeading>
                    <MtplAdventagesCardText>В OMAD основные процессы — от оформления до урегулирования — онлайн. Быстро и удобно</MtplAdventagesCardText>
                </MtplAdventagesCard>
                <MtplAdventagesCard>
                    <MtplAdventagesCardHeading>Максимально онлайн</MtplAdventagesCardHeading>
                    <MtplAdventagesCardText>В OMAD основные процессы — от оформления до урегулирования — онлайн. Быстро и удобно</MtplAdventagesCardText>
                </MtplAdventagesCard>

            </MtplAdventagesBlock>
            <MtplAdventagesHeading>Электронный полис автострахования</MtplAdventagesHeading>
            <MtplAdventagesInsurance>
                <div>
                    <MtplAdventagesInsuranceHeading>Максимально онлайн</MtplAdventagesInsuranceHeading>
                    <MtplAdventagesInsuranceText>---При расчете ОСАГО на онлайн-калькуляторе учитываем все коэффициенты и накопленную скидку за безаварийную езду</MtplAdventagesInsuranceText>
                    <MtplAdventagesInsuranceHeading>Максимально онлайн</MtplAdventagesInsuranceHeading>
                    <MtplAdventagesInsuranceText>---При расчете ОСАГО на онлайн-калькуляторе учитываем все коэффициенты и накопленную скидку за безаварийную езду</MtplAdventagesInsuranceText>
                    
                </div>
                <Image src={NoutImg} alt='images'/>
            </MtplAdventagesInsurance>
            <MtplAdventagesInsuranceTwo>
            <Image src={CarImg} alt='images'/>

                <div>
                    <MtplAdventagesInsuranceHeading>Максимально онлайн</MtplAdventagesInsuranceHeading>
                    <MtplAdventagesInsuranceText>---При расчете ОСАГО на онлайн-калькуляторе учитываем все коэффициенты и накопленную скидку за безаварийную езду</MtplAdventagesInsuranceText>
                    <MtplAdventagesInsuranceHeading>Максимально онлайн</MtplAdventagesInsuranceHeading>
                    <MtplAdventagesInsuranceText>---При расчете ОСАГО на онлайн-калькуляторе учитываем все коэффициенты и накопленную скидку за безаварийную езду</MtplAdventagesInsuranceText>
                </div>
            </MtplAdventagesInsuranceTwo>
            <MtplAdventagesHeading>Страховое возмещение по ОСАГО</MtplAdventagesHeading>
            <MtplAdventagesBlock>
                    <MtplAdventagesCard>
                        <MtplAdventagesCardHeading>Максимально онлайн</MtplAdventagesCardHeading>
                        <MtplAdventagesCardText>В OMAD основные процессы — от оформления до урегулирования — онлайн. Быстро и удобно</MtplAdventagesCardText>
                        <MtplAdventagesCardText>В OMAD основные процессы — от оформления до урегулирования — онлайн. Быстро и удобно</MtplAdventagesCardText>

                    </MtplAdventagesCard>
                    <MtplAdventagesCard>
                        <MtplAdventagesCardHeading>Максимально онлайн</MtplAdventagesCardHeading>
                        <MtplAdventagesCardText>В OMAD основные процессы — от оформления до урегулирования — онлайн. Быстро и удобно</MtplAdventagesCardText>
                        <MtplAdventagesCardText>В OMAD основные процессы — от оформления до урегулирования — онлайн. Быстро и удобно</MtplAdventagesCardText>

                    </MtplAdventagesCard>
            </MtplAdventagesBlock>
            <MtplAdventagesHeading>Рассчитайте стоимость ОСАГО на калькуляторе</MtplAdventagesHeading>
            <MtplAdventagesBlock>
                <NumberB>
                    <MtplAdventagesNubmer>
                        <NumText>1</NumText>
                    </MtplAdventagesNubmer>
                    <MtplAdventagesInsuranceText>Рассчитайте стоимость ОСАГО на онлайн калькуляторе</MtplAdventagesInsuranceText>
                </NumberB>
                <ImgBlock>
                    <Image src={Strelka} alt='str'/>
                </ImgBlock>
                <NumberB>
                    <MtplAdventagesNubmer>
                        <NumText>2</NumText>
                    </MtplAdventagesNubmer>
                    <MtplAdventagesInsuranceText>Рассчитайте стоимость ОСАГО на онлайн калькуляторе</MtplAdventagesInsuranceText>
                </NumberB>
                <ImgBlock>
                    <Image src={Strelka} alt='str'/>
                </ImgBlock>
                <NumberB>
                    <MtplAdventagesNubmer>
                        <NumText>3</NumText>
                    </MtplAdventagesNubmer>
                    <MtplAdventagesInsuranceText>Рассчитайте стоимость ОСАГО на онлайн калькуляторе</MtplAdventagesInsuranceText>
                </NumberB>
            </MtplAdventagesBlock>
        </>
            

    // </GWrapper>
  );
};
export default MtplAdventages;
