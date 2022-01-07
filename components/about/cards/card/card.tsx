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
import NextLink from 'next/link'
import {useTranslation} from 'next-i18next'
import Icon1 from "../../../../assets/images/about/cards/icon-2.png";
const Card: FC<CardProps> = ({CardLink1,CardLink2,CardLink3 , CardLink1Nav,CardLink2Nav,CardLink3Nav}) => {
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
          <NextLink href={CardLink1Nav}><a>{CardLink1}</a></NextLink>
        </CardTag>
        <CardTag>
        <NextLink href={CardLink2Nav}><a>{CardLink2}</a></NextLink>
          
        </CardTag>
        <CardTag>
        <NextLink href={CardLink3Nav}><a>{CardLink3}</a></NextLink>
        </CardTag>
      </CardTags>
    </Wrapper>
  );
};

export default Card;
