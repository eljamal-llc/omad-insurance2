import { FC } from "react";
import { HomeBg ,
         HomeBgItem,
         HomeHeading,
         HomeText,
         HomeBlock,
         CardServiceBlock,
         CardServiceHeading,
         CardServiceText,
         CardService
        } from "./mtpl-insurance-home.e";
import { MtplInsuranceHomeProps } from "./mtpl-insurance-home.t";
import Image from 'next/image'
import HomeIMg from '../../../assets/images/yur-page/singl-yur-img/home-bg-1.png'
import { GWrapper } from "../../../styles/global-styles.e";
import BreadcrumbsBlock from '../../common/bread-crumbs/Breadcrumbs'
const MtplInsuranceHome:FC<MtplInsuranceHomeProps> = (props : MtplInsuranceHomeProps)=>{
    return (
        <HomeBg>
            <HomeBlock>
                <HomeBgItem>
                    <BreadcrumbsBlock/>
                    <HomeHeading >{props.HomeHeading || 'Ответственность товаропроизводителя'}</HomeHeading>
                    <HomeText>{props.HomeText || 'Страхование без осмотра автомобиля и похода в офис. Скидки (КБМ) на ОСАГО за безаварийную езду'}</HomeText>
                    <CardService>
                        <CardServiceBlock>
                            <CardServiceHeading>Быстрый расчет</CardServiceHeading>
                            <CardServiceText>Рассчитайте и оплатите за 3 минуты</CardServiceText>
                        </CardServiceBlock>
                        <CardServiceBlock>
                            <CardServiceHeading>В любом регионе</CardServiceHeading>
                            <CardServiceText>Страховые выплаты за 1 — 2 дня</CardServiceText>
                        </CardServiceBlock>
                        <CardServiceBlock>
                            <CardServiceHeading>Помощь 24/7</CardServiceHeading>
                            <CardServiceText>Поддержка в чате и по телефону</CardServiceText>
                        </CardServiceBlock>
                    </CardService>
                </HomeBgItem>
               
                <Image src={HomeIMg}/>
            </HomeBlock>
        </HomeBg>
    )
}
export default MtplInsuranceHome