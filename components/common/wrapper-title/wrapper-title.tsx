import { FC } from "react";
import NextLink from "next/link";
import { Link } from "@mui/material";
import { useTranslation } from "react-i18next";
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
import { t } from "i18next";

const WrapperTitle: FC<WrapperTitleProps> = ({ title, onClass }) => {
  const {t} = useTranslation()
  return (
    <Wrapper className={onClass}>
      <TitleRow>
        <WrapperCategories className="wrapper-categories">
          <SectionTitle color="white" title={title} />
        </WrapperCategories>
        <WrapperTags className="wrapper-tags">
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
      </TitleRow>
    </Wrapper>
  );
};

export default WrapperTitle;
