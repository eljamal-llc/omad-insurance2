import { FC, useRef, useState } from "react";
import NextLink from "next/link";
import { Link } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination,
  Parallax,
  Navigation,
  EffectFade,
  Autoplay,
  FreeMode,
  Thumbs,
} from "swiper";
import Image from "next/image";

import { WantKnowProps } from "./want-know.t";
import {
  KnowList,
  KnowListItem,
  KnowRow,
  Wrapper,
  VerticalSlider,
  WrapperMob,
} from "./want-know.e";
import { GWrapper } from "../../../styles/global-styles.e";

import SliderImg1 from "../../../assets/images/hero/slider1.jpg";
import SliderImg2 from "../../../assets/images/hero/slider2.jpg";
import SliderImg3 from "../../../assets/images/hero/slider3.jpg";
import { SectionTitle, WantKnowM } from "../..";

SwiperCore.use([
  Pagination,
  Parallax,
  Navigation,
  EffectFade,
  Autoplay,
  FreeMode,
  Thumbs,
]);

const WantKnow: FC<WantKnowProps> = () => {
  const swiperRef = useRef(null);
  const buttonRef = useRef(null);
  let [activIdx, setActiveIdx] = useState(1);

  const toSlide = (num: number) => {
    setActiveIdx(num);
    // @ts-ignore
    swiperRef.current?.swiper.slideTo(num);
  };

  const lists = [
    {
      id: 1,
      name: "Оплатить счет онлайн",
    },
    {
      id: 2,
      name: "Проверка полиса на предмет хищения",
    },
    {
      id: 3,
      name: "Очередные платежи: Каско/Имущество",
    },
    {
      id: 4,
      name: "Стать агентом",
    },
    {
      id: 5,
      name: "Реестр агентов",
    },
  ];
  return (
    <>
      <Wrapper>
        <VerticalSlider>
          <Swiper
            // @ts-ignore
            ref={swiperRef}
            tag="section"
            direction={"vertical"}
            loop={true}
            slidesPerView={3}
            className="mySwiper"
            navigation={false}
            speed={1200}
            centeredSlides={true}
            loopedSlides={3}
            watchSlidesProgress={true}
            allowTouchMove={false}
            breakpoints={{
              // when window width is >= 1400px
              1400: {
                spaceBetween: 40,
              },
              1024: {
                spaceBetween: 20,
              },
              400: {
                spaceBetween: 10,
              },
            }}
          >
            <SwiperSlide>
              <Image src={SliderImg1} alt="test1" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={SliderImg2} alt="test1" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={SliderImg3} alt="test1" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={SliderImg1} alt="test1" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={SliderImg2} alt="test1" />
            </SwiperSlide>
          </Swiper>
        </VerticalSlider>
        <GWrapper>
          <SectionTitle title="Хочу узнать" color="white" classN="title" />
          <KnowRow>
            <KnowList>
              <div
                className={`box-out box${activIdx}`}
                // @ts-ignore
                top={activIdx}
              ></div>
              {lists.map((item, idx) => (
                <KnowListItem
                  key={idx}
                  onMouseMove={() => {
                    toSlide(item.id);
                  }}
                  className={activIdx == item.id ? "list-active" : ""}
                >
                  <NextLink href="/" passHref>
                    <Link>
                      <span className="box"></span>
                      {item.name}
                    </Link>
                  </NextLink>
                </KnowListItem>
              ))}
            </KnowList>
          </KnowRow>
        </GWrapper>
      </Wrapper>
      <WrapperMob>
        <WantKnowM />
      </WrapperMob>
    </>
  );
};

export default WantKnow;
