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
import {useTranslation} from 'next-i18next'

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

const WantKnow: FC<WantKnowProps> = ({ data }) => {
  const swiperRef = useRef(null);
  const buttonRef = useRef(null);
  let [activIdx, setActiveIdx] = useState(1);

  const toSlide = (num: number) => {
    setActiveIdx(num);
    // @ts-ignore
    swiperRef.current?.swiper.slideTo(num);
  };
  const { t } = useTranslation()

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
            {data.map((item, idx) => (
              <SwiperSlide key={idx}>
                {/* <Image src={SliderImg1} alt="test1" /> */}
                <img src={item.image} alt={item.title} />
              </SwiperSlide>
            ))}
          </Swiper>
        </VerticalSlider>
        <GWrapper>
          <SectionTitle title={t("common:want_to_know")} color="white" classN="title" />
          <KnowRow>
            <KnowList>
              <div
                className={`box-out box${activIdx}`}
                // @ts-ignore
                top={activIdx}
              ></div>
              {data.map((item, idx) => (
                <KnowListItem
                  key={idx}
                  onMouseMove={() => {
                    toSlide(idx + 1);
                  }}
                  className={activIdx == idx + 1 ? "list-active" : ""}
                >
                  <NextLink href="/" passHref>
                    <Link>
                      <span className="box"></span>
                      {item.title}
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
