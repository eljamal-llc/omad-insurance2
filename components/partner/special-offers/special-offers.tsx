import { FC } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Link } from "@mui/material";
import { useTranslation } from "react-i18next";
import { SpecialOffersProps } from "./special-offers.t";
import {
  HorizontalSliderButton,
  SpecialLeft,
  SpecialRight,
  SpecialRow,
  Wrapper,
} from "./special-offers.e";
import { GWrapper } from "../../../styles/global-styles.e";
import { SectionTitle } from "../..";
const SpecialOffers: FC<SpecialOffersProps> = ({ data }) => {
  const { t } = useTranslation();
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
  return (
    <Wrapper>
      <GWrapper>
        <SectionTitle
          title={t("common:Promotions_and_special_offers")}
          color="black"
          classN="title"
        />
      </GWrapper>
      {data && (
        <SpecialRow>
          <SpecialLeft>
            <div className="left-row">
              {data[0] ?  data[0].pos  == 1 && (
                <div className="min-block item">
                  <div className="item-image">
                    {/* <Image src={Img} alt="test1" /> */}
                    <img src={data[0].image} alt={data[0].title} />
                  </div>
                  <p className="offers-title">{data[0].title}</p>
                  <p className="offers-description">{data[0].text}</p>
                  <HorizontalSliderButton className="item-button">
                    <NextLink href={`/special-offers-single/${data[0].id}/${data[0].title}`} passHref>
                      <Link>
                        <span>Узнать подробнее</span>
                        <ArrowIcon fill="#F0803D" class="arrow-right" />
                      </Link>
                    </NextLink>
                  </HorizontalSliderButton>
                </div>
              ): null }
              {data[1] ? data[1].pos == 2 && (
                <div className="max-block item">
                  <div className="item-image">
                    {/* <Image src={Img} alt="test1" /> */}
                    <img src={data[1].image} alt={data[1].title} />
                  </div>
                  <p className="offers-title">{data[1].title}</p>
                  <p className="offers-description">{data[1].text}</p>
                  <HorizontalSliderButton className="item-button">
                    <NextLink href={`/special-offers-single/${data[1].id}/${data[1].title}`} passHref>
                      <Link>
                        <span>Узнать подробнее</span>
                        <ArrowIcon fill="#F0803D" class="arrow-right" />
                      </Link>
                    </NextLink>
                  </HorizontalSliderButton>
                </div>
              ): null }
            </div>
            <div className="left-row">
              {data[2] ? data[2].pos   == 3 && (
                <div className="max-block item">
                  <div className="item-image">
                    {/* <Image src={Img} alt="test1" /> */}
                    <img src={data[2].image} alt={data[2].title} />
                  </div>
                  <p className="offers-title">{data[2].title}</p>
                  <p className="offers-description">{data[2].text}</p>
                  <HorizontalSliderButton className="item-button">
                    <NextLink href={`/special-offers-single/${data[2].id}/${data[2].title}`} passHref>
                      <Link>
                        <span>Узнать подробнее</span>
                        <ArrowIcon fill="#F0803D" class="arrow-right" />
                      </Link>
                    </NextLink>
                  </HorizontalSliderButton>
                </div>
              ) : null }
              {data[3] ? data[3].pos   == 4 && (
                <div className="min-block item">
                  <div className="item-image">
                    {/* <Image src={Img} alt="test1" /> */}
                    <img src={data[3].image} alt={data[3].title} />
                  </div>
                  <p className="offers-title">{data[3].title}</p>
                  <p className="offers-description">{data[3].text}</p>
                  <HorizontalSliderButton className="item-button">
                    <NextLink href={`/special-offers-single/${data[3].id}/${data[3].title}`} passHref>
                      <Link>
                        <span>Узнать подробнее</span>
                        <ArrowIcon fill="#F0803D" class="arrow-right" />
                      </Link>
                    </NextLink>
                  </HorizontalSliderButton>
                </div>
              ): null }
            </div>
          </SpecialLeft>
          <SpecialRight className="item">
            {data[4] ?  data[4].pos  == 5 && (
              <>
                <div className="item-image">
                  {/* <Image src={Img} alt="test1" /> */}
                  <img src={data[4].image} alt={data[4].title} />
                </div>
                <p className="offers-title">{data[3].title}</p>
                <p className="offers-description">{data[3].text}</p>
                <HorizontalSliderButton className="item-button">
                  <NextLink href={`/special-offers-single/${data[4].id}/${data[4].title}`} passHref>
                    <Link>
                      <span>Узнать подробнее</span>
                      <ArrowIcon fill="#F0803D" class="arrow-right" />
                    </Link>
                  </NextLink>
                </HorizontalSliderButton>
              </>
            ): null }
          </SpecialRight>
        </SpecialRow>
      )}
    </Wrapper>
  );
};

export default SpecialOffers;
