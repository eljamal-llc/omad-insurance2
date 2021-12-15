import { FC, useRef, useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import { HeroProps } from "./hero.t";

import { GWrapper } from "../../../styles/global-styles.e";
import { Wrapper, SliderImg, SliderDescriptionBtn, HeroTitle } from "./hero.e";

import SliderImg1 from "../../../assets/images/hero/slider1.jpg";
import SliderImg2 from "../../../assets/images/hero/slider2.jpg";
import SliderImg3 from "../../../assets/images/hero/slider3.jpg";

import SwiperCore, {
  Pagination,
  Parallax,
  Navigation,
  EffectFade,
  Controller,
  Autoplay,
} from "swiper";

SwiperCore.use([Pagination, Parallax, Navigation, EffectFade, Autoplay]);

const Hero: FC<HeroProps> = () => {
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

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  const [lineProgress, setLineProgress] = useState(false);

  return (
    <Wrapper>
      <GWrapper className="container"></GWrapper>
      <Swiper
        direction={"vertical"}
        pagination={false}
        speed={1200}
        loop={true}
        parallax={true}
        modules={[Controller]}
        // @ts-ignore
        onSwiper={setControlledSwiper}
        allowTouchMove={false}
      >
        <SwiperSlide>
          <HeroTitle>
            Страхование <br />
            имущества 1
          </HeroTitle>
          <SliderImg
            data-swiper-parallax="20%"
            data-swiper-parallax-opacity="0"
          >
            <Image src={SliderImg1} alt="test1" />
          </SliderImg>
        </SwiperSlide>

        <SwiperSlide>
          <HeroTitle>
            Страхование <br />
            имущества 23
          </HeroTitle>
          <SliderImg
            data-swiper-parallax="20%"
            data-swiper-parallax-opacity="0"
          >
            <Image src={SliderImg2} alt="test2" />
          </SliderImg>
        </SwiperSlide>

        <SwiperSlide>
          <HeroTitle>
            Страхование <br />
            имущества 3
          </HeroTitle>
          <SliderImg
            data-swiper-parallax="20%"
            data-swiper-parallax-opacity="0"
          >
            <Image src={SliderImg3} alt="test3" />
          </SliderImg>
        </SwiperSlide>
      </Swiper>

      <div className="slider-description">
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

            // onSlideChangeTransitionStart={() => {
            //   console.log("last----");
            //   setLineProgress(true);
            // }}
            // onSlideChangeTransitionEnd={() => {
            //   console.log("last++++");
            //   setLineProgress(false);
            // }}
          >
            <SwiperSlide>
              <div className="slider-description-item">
                <h4 className="slider-description__title">
                  Для юридических лиц 1
                </h4>
                <p className="slider-description__content">
                  Корпоративное страхование — наиболее эффективный способ защиты
                  финансовой стабильности предприятия и компенсации
                  непрогнозируемых финансовых расходов. Ведь повреждение, гибель
                  или утрата имущественного объекта способны кардинальным
                  образом ухудшить экономическое положение предприятия.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-description-item">
                <h4 className="slider-description__title">
                  Для юридических лиц 2
                </h4>
                <p className="slider-description__content">
                  Корпоративное страхование — наиболее эффективный способ защиты
                  финансовой стабильности предприятия и компенсации
                  непрогнозируемых финансовых расходов. Ведь повреждение, гибель
                  или утрата имущественного объекта способны кардинальным
                  образом ухудшить экономическое положение предприятия.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-description-item">
                <h4 className="slider-description__title">
                  Для юридических лиц 3
                </h4>
                <p className="slider-description__content">
                  Корпоративное страхование — наиболее эффективный способ защиты
                  финансовой стабильности предприятия и компенсации
                  непрогнозируемых финансовых расходов. Ведь повреждение, гибель
                  или утрата имущественного объекта способны кардинальным
                  образом ухудшить экономическое положение предприятия.
                </p>
              </div>
            </SwiperSlide>

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

export default Hero;
