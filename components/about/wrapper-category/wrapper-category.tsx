import { FC } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Link } from "@mui/material";

import { WrapperCategoryProps } from "./wrapper-category.t";
import {
  Tag,
  TagsRow,
  TagsTitle,
  Wrapper,
  WrapperCategories,
  WrapperCategory,
  WrapperRow,
  WrapperTags,
} from "./wrapper-category.e";

const HeroCase: FC<WrapperCategoryProps> = () => {
  return (
    <Wrapper>
      <WrapperRow>
        <WrapperCategories>
          <WrapperCategory className="active">Частным лицам</WrapperCategory>
          <WrapperCategory>Юридическим лицам</WrapperCategory>
        </WrapperCategories>
        <WrapperTags>
          <TagsTitle>Все категории</TagsTitle>
          <TagsRow>
            <Tag>
              <NextLink href="/" passHref>
                <Link>Здоровья</Link>
              </NextLink>
            </Tag>
            <Tag>
              <NextLink href="/" passHref>
                <Link>Путешествия</Link>
              </NextLink>
            </Tag>
            <Tag>
              <NextLink href="/" passHref>
                <Link>Транспорт</Link>
              </NextLink>
            </Tag>
            <Tag>
              <NextLink href="/" passHref>
                <Link>Имущества</Link>
              </NextLink>
            </Tag>
          </TagsRow>
        </WrapperTags>
      </WrapperRow>
    </Wrapper>
  );
};

export default HeroCase;
