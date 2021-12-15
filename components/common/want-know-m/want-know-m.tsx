import { FC, useState } from "react";
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
import SwiperCore, { EffectCreative, Controller } from "swiper";

import SliderImg1 from "../../../assets/images/hero/slider1.jpg";
import SliderImg2 from "../../../assets/images/hero/slider2.jpg";

// install Swiper modules
SwiperCore.use([EffectCreative]);
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
const WantKnowM: FC<WantKnowMProps> = () => {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  return (
    <Wrapper>
      <InnerWrapper>
        <SectionTitle
          title="Хочу узнать"
          color="white"
          classN="section-title"
        />

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
                  rotate: [0, 100, 0],
                },
                next: {
                  origin: "right center",
                  translate: ["5%", 0, -200],
                  rotate: [0, -100, 0],
                },
              }}
              className="mySwiper3"
              modules={[Controller]}
              //   @ts-ignore
              controller={{ control: controlledSwiper }}
            >
              <SwiperSlide>
                <div>
                  <SliderTitle>Проверка полиса на предмет хищенияе</SliderTitle>
                  <SliderDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Faucibus quam ut urna non tortor pellentesque vestibulum,
                    turpis quis. A sit at mus vitae. Diam ultricies commodo
                    metus est, non vitae in sapien pellentesque. Platea
                    suspendisse amet orci ullamcorper pharetra. Amet morbi
                    posuere nulla bibendum orci. Faucibus tempor felis
                    adipiscing egestas. Consequat enim consectetur sed eu sit
                    felis, nec. Augue ultricies elit velit quam id risus. Sed
                    posuere quisque arcu tempor in odio.
                  </SliderDescription>
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
              <SwiperSlide>
                <div>
                  <SliderTitle>Проверка полиса на предмет хищенияе</SliderTitle>
                  <SliderDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Faucibus quam ut urna non tortor pellentesque vestibulum,
                    turpis quis. A sit at mus vitae. Diam ultricies commodo
                    metus est, non vitae in sapien pellentesque. Platea
                    suspendisse amet orci ullamcorper pharetra. Amet morbi
                    posuere nulla bibendum orci. Faucibus tempor felis
                    adipiscing egestas. Consequat enim consectetur sed eu sit
                    felis, nec. Augue ultricies elit velit quam id risus. Sed
                    posuere quisque arcu tempor in odio.
                  </SliderDescription>
                  <SliderButton></SliderButton>
                </div>
              </SwiperSlide>
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
                  rotate: [0, 100, 0],
                },
                next: {
                  origin: "right center",
                  translate: ["5%", 0, -200],
                  rotate: [0, -100, 0],
                },
              }}
              className="mySwiper6"
              modules={[Controller]}
              //   @ts-ignore
              onSwiper={setControlledSwiper}
            >
              <SwiperSlide>
                <SliderImage>
                  <Image src={SliderImg1} alt="test1" />
                </SliderImage>
              </SwiperSlide>
              <SwiperSlide>
                <SliderImage>
                  <Image src={SliderImg2} alt="test1" />
                </SliderImage>
              </SwiperSlide>
            </Swiper>
          </SliderRight>
        </SliderRow>
      </InnerWrapper>
    </Wrapper>
  );
};

export default WantKnowM;
