import { FC, useState, useRef, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { INewsData, NewsProps } from "./news.t";

import { GWrapper } from "../../../styles/global-styles.e";
import { Wrapper, SliderImg, SliderDescriptionBtn, HeroTitle } from "./news.e";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import slugify from "slugify";
import SwiperCore, {
  Pagination,
  Parallax,
  Navigation,
  EffectFade,
  Controller,
  Autoplay,
} from "swiper";
import { SectionTitle } from "..";
import { api } from "../../../services/api";
import ArrowIcon from "../../svg/ArrowIcon";

SwiperCore.use([Pagination, Parallax, Navigation, EffectFade, Autoplay]);

const News: FC<NewsProps> = () => {

  const { t } = useTranslation();
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [news, setNews] = useState<INewsData[] | []>([]);

  useEffect(() => {
    api.get("news").then((res) => {
      setNews(res.data.data);
    });
  }, []);
  
  const [lineProgress, setLineProgress] = useState(false);
  return (
    <Wrapper>
      <GWrapper className="container">
        <SectionTitle title={t("common:news_title")} color="white" classN="title" />
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
        className="news-image" >
        {news?.map((item, idx) => (
          <SwiperSlide key={idx}>
            <SliderImg data-swiper-parallax="20%" data-swiper-parallax-opacity="0" >
              <img src={item.image} alt={item.title} />
            </SliderImg>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="slider-description">
        <div className="news-date">
          <div className="month">
            <span>25</span>ноября
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
            {news?.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="slider-description-item">
                  <h4 className="slider-description__title">
                    <Link href={`/news/${item.id}/${slugify(item.title)}`}>
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
