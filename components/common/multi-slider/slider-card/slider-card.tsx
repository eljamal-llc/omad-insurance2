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
  const { title, info, main_image, slug, id } = item;
  return (
    <Wrapper>
      <NextLink href={`/page-persons?id=${id}`} passHref>
        <Link>
          <SliderTitle>{title}</SliderTitle>
          <SliderList>
            {info?.map((infoItem, idx) => (
              <SliderListItem key={`child-${idx}`}>{infoItem}</SliderListItem>
            ))}
          </SliderList>
          <SliderImg>
            {/* <Image src={Slider1} alt="slider-image" />
             */}
            <img src={main_image} alt={title} />
            <SliderLink>Купить онлайн</SliderLink>
          </SliderImg>
        </Link>
      </NextLink>
    </Wrapper>
  );
};

export default SliderCard;
