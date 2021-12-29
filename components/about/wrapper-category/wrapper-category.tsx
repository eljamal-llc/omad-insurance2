import { FC } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Link } from "@mui/material";
import { useTranslation } from "react-i18next";
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
  const {t} = useTranslation()
  return (
    <Wrapper>
      <WrapperRow>
        <WrapperCategories>
          <WrapperCategory className="active">{t('common:For_individuals')}</WrapperCategory>
          <WrapperCategory>{t('common:home_card_title3_Legal_entities')}</WrapperCategory>
        </WrapperCategories>
        <WrapperTags>
          <TagsTitle>{t('common:All_categories')}</TagsTitle>
          <TagsRow>
            <Tag>
              <NextLink href="/" passHref>
                <Link>{t('common:Health')}</Link>
              </NextLink>
            </Tag>
            <Tag>
              <NextLink href="/" passHref>
                <Link>{t('common:Travels')}</Link>
              </NextLink>
            </Tag>
            <Tag>
              <NextLink href="/" passHref>
                <Link>{t('common:Transport')}</Link>
              </NextLink>
            </Tag>
            <Tag>
              <NextLink href="/" passHref>
                <Link>{t('common:Property')}</Link>
              </NextLink>
            </Tag>
          </TagsRow>
        </WrapperTags>
      </WrapperRow>
    </Wrapper>
  );
};

export default HeroCase;
