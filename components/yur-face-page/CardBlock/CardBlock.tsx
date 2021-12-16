import { FC } from "react";
import {CardBlockProps} from './CardBlock.t'
import {CardBody,
        CradTitle,
        CardInfo,
        CardText,
        CardService,
        CardServiceHeading,
        CardServiceText,
        CardServiceBlock,
        CardBtns,
        HorizontalSliderButton,
        CardButton,
        CardBodyContent

    } from './CardBlock.e'
import NextLink from "next/link";
import { CardContent, Link } from "@mui/material";
import Image from 'next/image'
import car from '../../../assets/images/Card/CardCar.png'
const   Card: FC<CardBlockProps> = () => {
    const ArrowIcon = (props: any) => (
        <svg
          width="47"
          height="16"
          viewBox="0 0 47 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={props.class}
        >
          <path
            d="M1 7L8.74228e-08 7L-8.74228e-08 9L1 9L1 7ZM46.7071 8.70711C47.0976 8.31659 47.0976 7.68342 46.7071 7.2929L40.3431 0.928936C39.9526 0.538411 39.3195 0.538411 38.9289 0.928936C38.5384 1.31946 38.5384 1.95262 38.9289 2.34315L44.5858 8L38.9289 13.6569C38.5384 14.0474 38.5384 14.6805 38.9289 15.0711C39.3195 15.4616 39.9526 15.4616 40.3431 15.0711L46.7071 8.70711ZM1 9L46 9L46 7L1 7L1 9Z"
            fill={props.fill}
          />
        </svg>
      );
  return (
    <CardBody>
        <CardBodyContent>
            <CardInfo>
                <CradTitle>Страхование ОСАГО</CradTitle>
                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hac ut mauris, interdum. Massa sed eros, ut magna cras scelerisque elit. </CardText>
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
                <CardBtns>
                    <CardButton>Оформить полис</CardButton>
                    <HorizontalSliderButton>
                            <NextLink href="/" passHref>
                                <Link>
                                <span>Узнать подробнее</span>
                                <ArrowIcon fill="#F0803D" class="arrow-right" />
                                </Link>
                            </NextLink>
                    </HorizontalSliderButton>
                </CardBtns>
            </CardInfo>
        <Image src={car}/>

        </CardBodyContent>
       
    </CardBody>
    );
};

export default Card;
