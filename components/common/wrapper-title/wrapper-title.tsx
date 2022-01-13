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
import { useState } from "react";
const WrapperTitle: FC<WrapperTitleProps> = ({
  title,
  onClass,
  data,
  sortData,
}) => {
  const { t } = useTranslation();
  const [showBtn, setShowBtb] = useState("show");
  return (
    <Wrapper className={onClass}>
      <TitleRow>
        <WrapperCategories className="wrapper-categories">
          <SectionTitle color="white" title={title} />
        </WrapperCategories>
        {/* @ts-ignore */}
        {data?.length > 0 ? (
          <WrapperTags className="wrapper-tags">
            <TagsTitle onClick={() => sortData()}>
              {t("common:All_categories")}
            </TagsTitle>
            <TagsRow>
              {data?.map((item, idx) => (
                <Tag key={idx}>
                  <div onClick={() => sortData(item.id)}>{item.name}</div>

                  {/* <NextLink href="/" passHref>
                    <Link>{item.name}</Link>
                  </NextLink> */}
                </Tag>
              ))}
            </TagsRow>
          </WrapperTags>
        ) : (
          <></>
        )}
      </TitleRow>
    </Wrapper>
  );
};

export default WrapperTitle;
