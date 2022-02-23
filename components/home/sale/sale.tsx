import { FC, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import NextLink from "next/link";
import { Link } from "@mui/material";
import Image from "next/image";

import SwiperCore, {
  Pagination,
  Parallax,
  Navigation,
  EffectFade,
  Controller,
  Autoplay,
  FreeMode,
  Thumbs,
} from "swiper";

import { SaleProps } from "./sale.t";
import { GWrapper } from "../../../styles/global-styles.e";
import {
  HorizontalSlider,
  HorizontalSliderButton,
  HorizontalSliderDescription,
  HorizontalSliderImage,
  HorizontalSliderLeft,
  HorizontalSliderRight,
  HorizontalSliderRow,
  HorizontalSliderTitle,
  SaleRow,
  SaleTitle,
  VerticalSlider,
  Wrapper,
} from "./sale.e";
import slugify from "slugify";
import SliderImg1 from "../../../assets/images/hero/slider1.jpg";
import SliderImg2 from "../../../assets/images/hero/slider2.jpg";
import SliderImg3 from "../../../assets/images/hero/slider3.jpg";
import { SectionTitle } from "../..";
import { useTranslation } from "next-i18next";

SwiperCore.use([
  Pagination,
  Parallax,
  Navigation,
  EffectFade,
  Autoplay,
  FreeMode,
  Thumbs,
]);

const Sale: FC<SaleProps> = ({ data }) => {
  // const [controlledSwiper, setControlledSwiper] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { t } = useTranslation();
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
    <Wrapper>
      <GWrapper>
        <SectionTitle
          title={t("common:home_Promotions_and_special_offers")}
          color="black"
          classN="title"
        />
        {/*  */}
        <SaleRow>
          {data && (
            <>
              <VerticalSlider>
                <Swiper
                  direction={"vertical"}
                  //  @ts-ignore
                  onSwiper={setThumbsSwiper}
                  loop={true}
                  slidesPerView={5}
                  freeMode={true}
                  className="mySwiper"
                  navigation={false}
                  speed={1200}
                  spaceBetween={40}
                  centeredSlides={true}
                  slideToClickedSlide={true}
                  loopedSlides={5}
                  slideActiveClass={"test"}
                  watchSlidesProgress={true}
                  breakpoints={{
                    // when window width is >= 640px
                    200: {
                      slidesPerView: 3,
                      direction: "horizontal",
                    },
                    640: {
                      slidesPerView: 3,
                      direction: "horizontal",
                    },
                    // when window width is >= 768px
                    1024: {
                      slidesPerView: 5,
                      direction: "horizontal",
                    },
                    1400: {
                      spaceBetween: 20,
                      slidesPerView: 3,
                      direction: "vertical",
                    },
                    1500: {
                      slidesPerView: 5,
                      spaceBetween: 20,
                      direction: "vertical",
                    },
                    1800: {
                      spaceBetween: 40,
                      slidesPerView: 5,
                      direction: "vertical",
                    },
                  }}
                >
                  {data.map((item, idx) => (
                    <SwiperSlide key={idx}>
                      {/* <Image src={SliderImg1} alt="test1" /> */}
                      <img src={item.image} alt={item.title} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </VerticalSlider>
              <HorizontalSlider>
                <Swiper
                  // @ts-ignore
                  loop={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  className="mySwiper2"
                  speed={1200}
                >
                  {data.map((item, idx) => (
                    <SwiperSlide key={idx}>
                      <HorizontalSliderRow>
                        <HorizontalSliderLeft>
                          <HorizontalSliderTitle>
                            {item.title}
                          </HorizontalSliderTitle>
                          <HorizontalSliderDescription>
                            {item.text}
                          </HorizontalSliderDescription>

                          <HorizontalSliderButton>
                            <NextLink href={`/special-offers-single/${item.id}/${item.title}`} passHref>
                              <Link>
                                <span>Узнать подробнее</span>
                                <ArrowIcon fill="#F0803D" class="arrow-right" />
                              </Link>
                            </NextLink>
                          </HorizontalSliderButton>
                        </HorizontalSliderLeft>
                        <HorizontalSliderRight>
                          <HorizontalSliderImage>
                            {/* <Image
                              src={SliderImg1}
                              alt="test1"
                              className="img"
                            /> */}
                            <img src={item.image} alt={item.title} />
                          </HorizontalSliderImage>
                        </HorizontalSliderRight>
                      </HorizontalSliderRow>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </HorizontalSlider>
            </>
          )}
        </SaleRow>
      </GWrapper>
    </Wrapper>
  );
};

export default Sale;
