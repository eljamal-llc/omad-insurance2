import { FC } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Link } from "@mui/material";
import parse from "html-react-parser";

import { SliderCardProps } from "./slider-card.t";

import {
  SliderImg,
  SliderLink,
  SliderList,
  SliderListItem,
  SliderTitle,
  Wrapper,
  CardContent
} from "./slider-card.e";

import Slider1 from "../../../../assets/images/multi-slider/slider-1.jpg";

const SliderCard: FC<SliderCardProps> = ({ item }) => {
  const { name, info, image, slug, id } = item;
  return (
    <Wrapper>
      <NextLink href={`/page-persons?id=${id}`} passHref>
        <Link>
          <SliderTitle>{name}</SliderTitle>
          <SliderList>
            {/* {info?.map((infoItem, idx) => (
              <SliderListItem key={`child-${idx}`}>{infoItem}</SliderListItem>
            ))} */}
            <CardContent>{parse(info)}</CardContent>
          </SliderList>
          <SliderImg>
            {/* <Image src={Slider1} alt="slider-image" />
             */}
            <img src={image} alt={name} />
            <SliderLink>Купить онлайн</SliderLink>
          </SliderImg>
        </Link>
      </NextLink>
    </Wrapper>
  );
};

export default SliderCard;
