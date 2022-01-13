import { FC, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import NextLink from "next/link";
import { Link } from "@mui/material";

import SectionTitle from "../section-title/section-title";
import { WantKnowMProps } from "./want-know-m.t";
import {
  InnerWrapper,
  SliderButton,
  SliderDescription,
  SliderImage,
  SliderLeft,
  SliderRight,
  SliderRow,
  SliderTitle,
  Wrapper,
} from "./want-know-m.e";

// import Swiper core and required modules
import SwiperCore, { EffectCreative, Controller, Navigation } from "swiper";

import SliderImg1 from "../../../assets/images/hero/slider1.jpg";
import SliderImg2 from "../../../assets/images/hero/slider2.jpg";

// install Swiper modules
SwiperCore.use([EffectCreative, Navigation]);
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
const WantKnowM: FC<WantKnowMProps> = ({ data }) => {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <Wrapper>
      <InnerWrapper>
        <SectionTitle
          title="Хочу узнать"
          color="white"
          classN="section-title"
        />
        {data && (
          <SliderRow>
            <SliderLeft>
              <Swiper
                grabCursor={true}
                effect={"creative"}
                creativeEffect={{
                  prev: {
                    shadow: true,
                    origin: "left center",
                    translate: ["-5%", 0, -200],
                    rotate: [0, 106, 0],
                  },
                  next: {
                    origin: "right center",
                    translate: ["5%", 0, -200],
                    rotate: [0, -106, 0],
                  },
                }}
                className="mySwiper3"
                modules={[Controller]}
                //   @ts-ignore
                controller={{ control: controlledSwiper }}
                navigation={{
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                }}
                onInit={(swiper) => {
                  // @ts-ignore
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  // @ts-ignore
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
              >
                <div className="slider-buttons">
                  <div ref={navigationPrevRef} className="nav nav-left">
                    <ArrowIcon fill="#F0803D" class="svg arrow-left" />
                  </div>

                  <div ref={navigationNextRef} className="nav nav-right">
                    <ArrowIcon fill="#F0803D" class="svg arrow-right" />
                  </div>
                </div>
                {data.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <div>
                      <SliderTitle>{item.title}</SliderTitle>
                      <SliderDescription>{item.text}</SliderDescription>
                      <SliderButton>
                        <NextLink href="/" passHref>
                          <Link>
                            <span>Узнать подробнее</span>
                            <ArrowIcon fill="#F0803D" class="arrow-right" />
                          </Link>
                        </NextLink>
                      </SliderButton>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </SliderLeft>
            <SliderRight>
              <Swiper
                grabCursor={true}
                effect={"creative"}
                creativeEffect={{
                  prev: {
                    shadow: true,
                    origin: "left center",
                    translate: ["-5%", 0, -200],
                    rotate: [0, 105, 0],
                  },
                  next: {
                    origin: "right center",
                    translate: ["5%", 0, -200],
                    rotate: [0, -105, 0],
                  },
                }}
                className="mySwiper6"
                modules={[Controller]}
                //   @ts-ignore
                onSwiper={setControlledSwiper}
              >
                {data.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <SliderImage>
                      {/* <Image src={SliderImg1} alt="test1" /> */}
                      <img src={item.image} alt={item.title} />
                    </SliderImage>
                  </SwiperSlide>
                ))}
              </Swiper>
            </SliderRight>
          </SliderRow>
        )}
      </InnerWrapper>
    </Wrapper>
  );
};

export default WantKnowM;
