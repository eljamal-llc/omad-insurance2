import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
// import { Link } from "@mui/material";
import NextLink from 'next/link'
import { CardProps } from "./card.t";
import {
  CardDesc,
  CardTag,
  CardTags,
  SliderImg,
  SliderLink,
  SliderList,
  SliderListItem,
  SliderTitle,
  Wrapper,
  WrapperTag,
} from "./card.e";

import Slider1 from "../../../../assets/images/multi-slider/slider-1.jpg";

const Card: FC<CardProps> = ({ id, item }) => {
  return id == "shop" ? (
    <Wrapper>
      <Link href={`/mtpl-insurance?id=${item.id}`} passHref>
        <a>
          <div>
            <SliderTitle>{item.name}</SliderTitle>
            <p>{item.info}</p>
          </div>
         
          {/* <SliderList>
            <SliderListItem>ОСАГО</SliderListItem>
            <SliderListItem>КАСКО</SliderListItem>
            <SliderListItem>КАСКО профессионал</SliderListItem>
            <SliderListItem>Помощ на дороге</SliderListItem>
          </SliderList> */}
          <div>
            <SliderImg>
              {/* <Image src={Slider1} alt="slider-image" /> */}
              <img src={item.image} alt={item.name} />
              <SliderLink>Купить онлайн</SliderLink>
            </SliderImg>
          </div>
          
        </a>
      </Link>
    </Wrapper>
  ) : (
    <WrapperTag>
      <SliderTitle>Авто</SliderTitle>
      <CardDesc>Узнать, что делать в случае если:</CardDesc>
      <CardTags>
        <CardTag>
          <NextLink href="/" passHref>
            <Link href="/">Произошло ДТП</Link>
          </NextLink>
        </CardTag>
      </CardTags>
      <CardTag>
        <NextLink href="/" passHref>
          <Link href="/">ДТП с иностранным ТС</Link>
        </NextLink>
      </CardTag>

      <CardTag>
        <NextLink href="/" passHref>
          <Link href="/">ДТП произошло за рубежом</Link>
        </NextLink>
      </CardTag>

      <CardTag>
        <NextLink href="/" passHref>
          <Link href={"/"}>Противоправное действие третьих лиц </Link>
        </NextLink>
      </CardTag>

      <SliderImg>
        <Image src={Slider1} alt="slider-image" />
        <SliderLink>Купить онлайн</SliderLink>
      </SliderImg>
    </WrapperTag>
  );
};

export default Card;
