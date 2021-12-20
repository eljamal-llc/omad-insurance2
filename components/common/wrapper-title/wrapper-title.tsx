import { FC } from "react";
import NextLink from "next/link";
import { Link } from "@mui/material";

import { WrapperTitleProps } from "./wrapper-title.t";
import {
  Tag,
  TagsRow,
  TagsTitle,
  TitleRow,
  Wrapper,
  WrapperCategories,
  WrapperTags,
} from "./wrapper-title.e";
import { SectionTitle } from "../index";

const WrapperTitle: FC<WrapperTitleProps> = ({ title, onClass }) => {
  return (
    <Wrapper className={onClass}>
      <TitleRow>
        <WrapperCategories className="wrapper-categories">
          <SectionTitle color="white" title={title} />
        </WrapperCategories>
        <WrapperTags className="wrapper-tags">
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
      </TitleRow>
    </Wrapper>
  );
};

export default WrapperTitle;
