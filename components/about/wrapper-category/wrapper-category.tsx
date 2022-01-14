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

const HeroCase: FC<WrapperCategoryProps> = ({
  id,
  setOnlineInsure,
  onlineInsure,
  data,
  sortData,
}) => {
  const { t } = useTranslation();
  const handlePrivate = () => {
    setOnlineInsure(1);
  };
  const handlePublic = () => {
    setOnlineInsure(2);
  };
  return (
    <Wrapper>
      <WrapperRow>
        <WrapperCategories>
          <WrapperCategory
            className={onlineInsure == 1 ? "active" : ""}
            onClick={handlePrivate}
          >
            {t("common:For_individuals")}
          </WrapperCategory>
          <WrapperCategory
            className={onlineInsure == 2 ? "active" : ""}
            onClick={handlePublic}
          >
            {t("common:home_card_title3_Legal_entities")}
          </WrapperCategory>
        </WrapperCategories>
        {id == "shop" ? (
          <WrapperTags>
            <TagsTitle onClick={() => sortData()}>
              {t("common:All_categories")}
            </TagsTitle>
            <TagsRow>
              {data?.map((item: any, idx: any) => (
                <Tag key={idx} onClick={() => sortData(item.id)}>
                  {item.name}
                </Tag>
              ))}
            </TagsRow>
          </WrapperTags>
        ) : (
          ""
        )}
      </WrapperRow>
    </Wrapper>
  );
};

export default HeroCase;
