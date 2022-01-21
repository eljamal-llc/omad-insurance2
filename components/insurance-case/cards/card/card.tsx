import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
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
  return (
    <>
      {id == "shop" && (
        <Wrapper>
          <Link href={`/mtpl-insurance?id=${item.id}`} passHref>
            <a>
              <div>
                <SliderTitle>{item.name}</SliderTitle>
                <p>{item.info}</p>
              </div>
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
      )}

      {id == "case" && (
        <WrapperTag>
          <SliderTitle>{item.title}</SliderTitle>
          <CardDesc>{parse(item.description)}</CardDesc>
          <CardTags>
            {item.subCategory?.map((tag: any, tagId: any) => (
              <CardTag key={tagId}>
                <Link href="#" passHref>
                  <a>{tag.title}</a>
                </Link>
              </CardTag>
            ))}
          </CardTags>

          <SliderImg>
            <Image src={Slider1} alt="slider-image" />
            {/* <SliderLink>Купить онлайн</SliderLink> */}
          </SliderImg>
        </WrapperTag>
      )}
    </>
  );
};

export default Card;
