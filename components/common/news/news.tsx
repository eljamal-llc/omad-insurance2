import { FC, useState, useRef } from "react";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { NewsProps } from "./news.t";

import { GWrapper } from "../../../styles/global-styles.e";
import { Wrapper, SliderImg, SliderDescriptionBtn, HeroTitle } from "./news.e";
import Link from "next/link";
import SliderImg1 from "../../../assets/images/hero/slider1.jpg";
import SliderImg2 from "../../../assets/images/hero/slider2.jpg";
import SliderImg3 from "../../../assets/images/hero/slider3.jpg";
import { useTranslation } from "next-i18next";

import SwiperCore, {
  Pagination,
  Parallax,
  Navigation,
  EffectFade,
  Controller,
  Autoplay,
} from "swiper";
import { SectionTitle } from "..";

SwiperCore.use([Pagination, Parallax, Navigation, EffectFade, Autoplay]);

const News: FC<NewsProps> = ({ data }) => {
  const ArrowIcon = (props: any) => (
    <svg
      width="16"
      height="47"
      viewBox="0 0 16 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.class}
    >
      <path
        d="M9 46L9 47L7 47L7 46L9 46ZM7.29289 0.292893C7.68341 -0.0976295 8.31658 -0.0976296 8.7071 0.292892L15.0711 6.65685C15.4616 7.04738 15.4616 7.68054 15.0711 8.07107C14.6805 8.46159 14.0474 8.46159 13.6569 8.07107L8 2.41422L2.34314 8.07107C1.95262 8.46159 1.31945 8.46159 0.928929 8.07107C0.538404 7.68054 0.538404 7.04738 0.928929 6.65685L7.29289 0.292893ZM7 46L7 1L9 1L9 46L7 46Z"
        fill={props.fill}
      />
    </svg>
  );
  const { t } = useTranslation();
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  const [lineProgress, setLineProgress] = useState(false);
  return (
    <Wrapper>
      <GWrapper className="container">
        <SectionTitle
          title={t("common:news_title")}
          color="white"
          classN="title"
        />
      </GWrapper>
      <Swiper
        direction={"vertical"}
        pagination={false}
        speed={1200}
        loop={true}
        modules={[Controller]}
        // @ts-ignore
        onSwiper={setControlledSwiper}
        allowTouchMove={false}
        className="news-image"
      >
        {data?.map((item, idx) => (
          <SwiperSlide key={idx}>
            <SliderImg
              data-swiper-parallax="20%"
              data-swiper-parallax-opacity="0"
            >
              {/* <Image src={SliderImg1} alt="test1" /> */}
              <img src={item.image} alt={item.title} />
            </SliderImg>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="slider-description">
        <div className="news-date">
          <div className="month">
            <span>25</span>????????????
          </div>
          <div className="year">2021</div>
        </div>
        <div className="slider-description__row">
          <Swiper
            fadeEffect={{ crossFade: true }}
            effect="fade"
            speed={1200}
            loop={true}
            modules={[Controller]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              type: "fraction",
            }}
            // @ts-ignore
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
            onSlideChange={(swiper) => {
              // console.log("--->>>>", swiper.realIndex);
              setLineProgress(!lineProgress);
            }}
          >
            {data?.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="slider-description-item">
                  <h4 className="slider-description__title">
                    <Link href={`/news?id=${item.id}`}>
                      <a>{item.title}</a>
                    </Link>
                  </h4>
                  <p className="slider-description__content">{item.anons}</p>
                </div>
              </SwiperSlide>
            ))}

            <div
              className={
                lineProgress
                  ? "slider-description__line active"
                  : "slider-description__line"
              }
            >
              <span className="line"></span>
            </div>
            <div className="slider-description__buttons">
              <SliderDescriptionBtn ref={navigationPrevRef}>
                <ArrowIcon fill="#F0803D" class="arrow-top" />
              </SliderDescriptionBtn>

              <SliderDescriptionBtn ref={navigationNextRef}>
                <ArrowIcon fill="#F0803D" class="arrow-bottom" />
              </SliderDescriptionBtn>
            </div>
          </Swiper>
        </div>
      </div>
    </Wrapper>
  );
};

export default News;
