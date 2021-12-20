import { FC } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Link } from "@mui/material";

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

import Img from "../../../assets/images/multi-slider/slider-1.jpg";

const SpecialOffers: FC<SpecialOffersProps> = () => {
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
          title="Акции и спец предложения"
          color="black"
          classN="title"
        />
      </GWrapper>
      <SpecialRow>
        <SpecialLeft>
          <div className="left-row">
            <div className="min-block item">
              <div className="item-image">
                <Image src={Img} alt="test1" />
              </div>
              <p className="offers-title">Turpis parturient vitae.</p>
              <p className="offers-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                pellentesque quis volutpat felis tortor. Ultrices ornare
                faucibus hendrerit eu nulla. Nibh nisl augue congue viverra nam
                mauris.
              </p>
              <HorizontalSliderButton className="item-button">
                <NextLink href="/" passHref>
                  <Link>
                    <span>Узнать подробнее</span>
                    <ArrowIcon fill="#F0803D" class="arrow-right" />
                  </Link>
                </NextLink>
              </HorizontalSliderButton>
            </div>
            <div className="max-block item">
              <div className="item-image">
                <Image src={Img} alt="test1" />
              </div>
              <p className="offers-title">Turpis parturient vitae.</p>
              <p className="offers-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                pellentesque quis volutpat felis tortor. Ultrices ornare
                faucibus hendrerit eu nulla. Nibh nisl augue congue viverra nam
                mauris.
              </p>
              <HorizontalSliderButton className="item-button">
                <NextLink href="/" passHref>
                  <Link>
                    <span>Узнать подробнее</span>
                    <ArrowIcon fill="#F0803D" class="arrow-right" />
                  </Link>
                </NextLink>
              </HorizontalSliderButton>
            </div>
          </div>
          <div className="left-row">
            <div className="max-block item">
              <div className="item-image">
                <Image src={Img} alt="test1" />
              </div>
              <p className="offers-title">Turpis parturient vitae.</p>
              <p className="offers-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                pellentesque quis volutpat felis tortor. Ultrices ornare
                faucibus hendrerit eu nulla. Nibh nisl augue congue viverra nam
                mauris.
              </p>
              <HorizontalSliderButton className="item-button">
                <NextLink href="/" passHref>
                  <Link>
                    <span>Узнать подробнее</span>
                    <ArrowIcon fill="#F0803D" class="arrow-right" />
                  </Link>
                </NextLink>
              </HorizontalSliderButton>
            </div>
            <div className="min-block item">
              <div className="item-image">
                <Image src={Img} alt="test1" />
              </div>
              <p className="offers-title">Turpis parturient vitae.</p>
              <p className="offers-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                pellentesque quis volutpat felis tortor. Ultrices ornare
                faucibus hendrerit eu nulla. Nibh nisl augue congue viverra nam
                mauris.
              </p>
              <HorizontalSliderButton className="item-button">
                <NextLink href="/" passHref>
                  <Link>
                    <span>Узнать подробнее</span>
                    <ArrowIcon fill="#F0803D" class="arrow-right" />
                  </Link>
                </NextLink>
              </HorizontalSliderButton>
            </div>
          </div>
        </SpecialLeft>
        <SpecialRight className="item">
          <div className="item-image">
            <Image src={Img} alt="test1" />
          </div>
          <p className="offers-title">Turpis parturient vitae.</p>
          <p className="offers-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
            pellentesque quis volutpat felis tortor. Ultrices ornare faucibus
            hendrerit eu nulla. Nibh nisl augue congue viverra nam mauris.
          </p>
          <HorizontalSliderButton className="item-button">
            <NextLink href="/" passHref>
              <Link>
                <span>Узнать подробнее</span>
                <ArrowIcon fill="#F0803D" class="arrow-right" />
              </Link>
            </NextLink>
          </HorizontalSliderButton>
        </SpecialRight>
      </SpecialRow>
    </Wrapper>
  );
};

export default SpecialOffers;