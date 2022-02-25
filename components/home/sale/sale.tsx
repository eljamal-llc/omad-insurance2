import { FC, useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import NextLink from "next/link";
import { Link } from "@mui/material";


import SwiperCore, {
  Pagination,
  Parallax,
  Navigation,
  EffectFade,
  Autoplay,
  FreeMode,
  Thumbs,
} from "swiper";

import { ISaleData, SaleProps } from "./sale.t";
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
import { SectionTitle } from "../..";
import { useTranslation } from "next-i18next";
import { api } from "../../../services/api";
import ArrowIcon from "../../svg/ArrowIcon";

SwiperCore.use([
  Pagination,
  Parallax,
  Navigation,
  EffectFade,
  Autoplay,
  FreeMode,
  Thumbs,
]);

const Sale: FC<SaleProps> = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { t } = useTranslation();

  const [sale, setSale] = useState<ISaleData[] | []>([]);
  useEffect(() => {
    api.get("promotions-offers").then((res) => {
      setSale(res.data.data);
    });
  }, []);

  return (
    <Wrapper>
      <GWrapper>
        <SectionTitle title={t("common:home_Promotions_and_special_offers")}
          color="black" classN="title" />
 
        <SaleRow>
          {sale && (
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
                  {sale.map((item, idx) => (
                    <SwiperSlide key={idx}>
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
                  speed={1200} >
                  {sale.map((item, idx) => (
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
                            <NextLink href={`/special-offers-single/${item.id}/${slugify(item.title)}`} passHref>
                                <Link>
                                  <span>Узнать подробнее</span>
                                  <ArrowIcon fill="#F0803D" class="arrow-right" />
                                </Link>
                            </NextLink>
                          </HorizontalSliderButton>
                        </HorizontalSliderLeft>
                        <HorizontalSliderRight>
                          <HorizontalSliderImage>
                         
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
