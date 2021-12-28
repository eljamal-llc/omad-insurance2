import { FC } from "react";
import Image from "next/image";
import { CardProps } from "./card.t";
import {
  CardIcon,
  CardTag,
  CardTags,
  CardTitle,
  CardTitleRow,
  Wrapper,
} from "./card.e";
import {useTranslation} from 'next-i18next'

import Icon1 from "../../../../assets/images/about/cards/icon-2.png";
const Card: FC<CardProps> = () => {
  const {t} = useTranslation()
  return (
    <Wrapper>
      <CardTitleRow>
        <CardTitle>{t('common:Mission_and_values')}</CardTitle>
        <CardIcon>
          <Image src={Icon1} alt="test2" />
        </CardIcon>
      </CardTitleRow>
      <CardTags>
        <CardTag>
          <span>Миссия</span>
        </CardTag>
        <CardTag>
          <span>Ценности</span>
        </CardTag>
        <CardTag>
          <span>Социальная ответственность</span>
        </CardTag>
      </CardTags>
    </Wrapper>
  );
};

export default Card;
