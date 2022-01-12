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
import NextLink from "next/link";
import { useTranslation } from "next-i18next";
import Icon1 from "../../../../assets/images/about/cards/icon-2.png";
const Card: FC<CardProps> = ({ item }) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <CardTitleRow>
        <CardTitle>{item.title}</CardTitle>
        <CardIcon>
          {/* <Image src={Icon1} alt="test2" /> */}
          <img src={item.icon} alt={item.title} />
        </CardIcon>
      </CardTitleRow>
      <CardTags>
        {item?.subCategories?.map((itemD, idx) => (
          <CardTag key={idx}>
            <NextLink href={itemD.slug} passHref>
              <a>{itemD.title}</a>
            </NextLink>
          </CardTag>
        ))}
      </CardTags>
    </Wrapper>
  );
};

export default Card;
