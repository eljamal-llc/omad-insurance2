import { FC, useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import Link from "next/link";
import { FourSliderProps } from "./four-slider.t";
import { Wrapper } from "./four-slider.e";
import { api } from "../../../../services/api";

// install Swiper modules
SwiperCore.use([Navigation]);
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
const FourSlider: FC<FourSliderProps> = () => {
  const [news, setNews] = useState([]);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  useEffect(() => {
    api.get("news", { params: { id: "part" } }).then((res) => {
      // console.log(res.data);
      setNews(res.data);
    });
  }, []);
  return (
    <Wrapper>
      <Swiper
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
        className="mySwiper"
      >
        <div className="slider-buttons">
          <div ref={navigationPrevRef} className="nav nav-left">
            <ArrowIcon fill="#F0803D" class="svg arrow-left" />
          </div>

          <div ref={navigationNextRef} className="nav nav-right">
            <ArrowIcon fill="#F0803D" class="svg arrow-right" />
          </div>
        </div>
        {news?.map((items, idx) => (
          <SwiperSlide key={idx}>
            <div className="slider-row">
              {/* @ts-ignore */}
              {items?.map((item, index) => (
                <div className="slider-item" key={index}>
                  <div className="slider-img">
                    <div className="image">
                      {/* <Image src={SliderImg1} alt="test1" /> */}
                      <img src={item.image} alt={item.title} />
                    </div>
                  </div>
                  <div className="slider-content">
                    <h6 className="slider-content__name">
                      <Link href={`/news?id=${item.id}`}>
                        <a>{item.title}</a>
                      </Link>
                    </h6>
                    <p className="slider-content__text">{item.anons}</p>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>Slide 2</SwiperSlide> */}
      </Swiper>
    </Wrapper>
  );
};

export default FourSlider;
