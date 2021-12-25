import { FC } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Link } from "@mui/material";

import { SliderCardProps } from "./slider-card.t";

import {
  SliderImg,
  SliderLink,
  SliderList,
  SliderListItem,
  SliderTitle,
  Wrapper,
} from "./slider-card.e";

import Slider1 from "../../../../assets/images/multi-slider/slider-1.jpg";

const SliderCard: FC<SliderCardProps> = ({ item }) => {
  const { title, info, image, slug } = item;
  return (
    <Wrapper>
      <NextLink href="/yur-face-page" passHref>
        <Link>
          <SliderTitle>{title}</SliderTitle>
          <SliderList>
            {info?.map((infoItem, idx) => (
              <SliderListItem key={`child-${idx}`}>{infoItem}</SliderListItem>
            ))}

            {/* <SliderListItem>КАСКО</SliderListItem>
            <SliderListItem>КАСКО профессионал</SliderListItem>
            <SliderListItem>Помощ на дороге</SliderListItem> */}
          </SliderList>
          <SliderImg>
            <Image src={Slider1} alt="slider-image" />
            <SliderLink>Купить онлайн</SliderLink>
          </SliderImg>
        </Link>
      </NextLink>
    </Wrapper>
  );
};

export default SliderCard;
