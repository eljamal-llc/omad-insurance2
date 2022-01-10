import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import NextLink from "next/link";
import { useTranslation } from "react-i18next";
import { CardBlockProps } from "./CardBlock.t";

import {
  CardBody,
  CradTitle,
  CardInfo,
  CardText,
  CardService,
  CardServiceHeading,
  CardServiceText,
  CardServiceBlock,
  CardBtns,
  HorizontalSliderButton,
  CardButton,
  CardBodyContent,
  CardImage,
} from "./CardBlock.e";

import car from "../../../assets/images/Card/CardCar.png";

const Card: FC<CardBlockProps> = ({ item }) => {
  // console.log("inner==>>>", item);
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
  const { main_title, main_description, main_image, id } = item;
  const { t } = useTranslation();
  return (
    <CardBody>
      <CardBodyContent>
        <CardInfo>
          <CradTitle>{main_title}</CradTitle>
          <CardText>{main_description}</CardText>
          <CardService>
            <CardServiceBlock>
              <CardServiceHeading>
                {t("common:Quick_calculation")}
              </CardServiceHeading>
              <CardServiceText>
                {t("common:Calculate_and_pay_3_minutes")}
              </CardServiceText>
            </CardServiceBlock>
            <CardServiceBlock>
              <CardServiceHeading>{t("common:any_region")}</CardServiceHeading>
              <CardServiceText>
                {t("common:Insurance_payments_days")}
              </CardServiceText>
            </CardServiceBlock>
            <CardServiceBlock>
              <CardServiceHeading>{t("common:Help__24")}</CardServiceHeading>
              <CardServiceText>
                {t("common:Live_chat_and_phone_support")}
              </CardServiceText>
            </CardServiceBlock>
          </CardService>
          <CardBtns>
            <CardButton>{t("common:Get_policy")}</CardButton>
            <HorizontalSliderButton>
              <Link href={`/mtpl-insurance?id=${id}`} passHref>
                <a>
                  <span>{t("common:Learn_more")}</span>
                  <ArrowIcon fill="#F0803D" class="arrow-right" />
                </a>
              </Link>
            </HorizontalSliderButton>
          </CardBtns>
        </CardInfo>
        <CardImage>
          {/* <Image src={car} alt="image-test" />
           */}
          <img src={main_image} alt={main_title} />
        </CardImage>
      </CardBodyContent>
    </CardBody>
  );
};

export default Card;
