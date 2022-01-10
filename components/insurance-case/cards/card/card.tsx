import { FC } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Link } from "@mui/material";

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

const Card: FC<CardProps> = ({ id }) => {
  // const test = false;
  return id == "10" ? (
    <Wrapper>
      <NextLink href="/" passHref>
        <Link>
          <SliderTitle>Другие программы</SliderTitle>
          <SliderList>
            <SliderListItem>ОСАГО</SliderListItem>
            <SliderListItem>КАСКО</SliderListItem>
            <SliderListItem>КАСКО профессионал</SliderListItem>
            <SliderListItem>Помощ на дороге</SliderListItem>
          </SliderList>
          <SliderImg>
            <Image src={Slider1} alt="slider-image" />
            <SliderLink>Купить онлайн</SliderLink>
          </SliderImg>
        </Link>
      </NextLink>
    </Wrapper>
  ) : (
    <WrapperTag>
      <SliderTitle>Авто</SliderTitle>
      <CardDesc>Узнать, что делать в случае если:</CardDesc>
      <CardTags>
        <CardTag>
          <NextLink href="/" passHref>
            <Link>Произошло ДТП</Link>
          </NextLink>
        </CardTag>
      </CardTags>
      <CardTag>
        <NextLink href="/" passHref>
          <Link>ДТП с иностранным ТС</Link>
        </NextLink>
      </CardTag>

      <CardTag>
        <NextLink href="/" passHref>
          <Link>ДТП произошло за рубежом</Link>
        </NextLink>
      </CardTag>

      <CardTag>
        <NextLink href="/" passHref>
          <Link>Противоправное действие третьих лиц </Link>
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
