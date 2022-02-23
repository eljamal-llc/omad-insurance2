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
import { useRouter } from "next/router";
import { GWrapper } from "../../../styles/global-styles.e";
import slugify from "slugify";
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
  let [activIdx, setActiveIdx] = useState(0);

  const toSlide = (num: number) => {
    setActiveIdx(num);
    // @ts-ignore
    swiperRef.current?.swiper.slideTo(num + 3);
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
  const router = useRouter()
  const {id} = router.query
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
                <img key={idx} src={item.image} alt={item.title} />
              </SwiperSlide>
            ))}
          </Swiper>
        </VerticalSlider>
        <GWrapper>
          <SectionTitle title={t("common:want_to_know")} color="white" classN="title" />
          <KnowRow>
            <KnowList>
              {/* <div
                className={`box-out box${activIdx}`}
                // @ts-ignore
                top={activIdx}
              ></div> */}
              {data.map((item, idx) => (
                <KnowListItem
                  key={idx}
                  onMouseMove={() => {
                    toSlide(idx );
                  }}
                  className={activIdx == idx  ? "list-active" : ""}
                >
                  <NextLink href={`/want-to-know/${item.id}/${slugify(item.title)}`} passHref>
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
 