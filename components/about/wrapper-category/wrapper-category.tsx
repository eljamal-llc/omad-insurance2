import { FC, useState } from "react";
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
  const [activeBtn ,setActiveBtn ] = useState('active')
  const removeAct = ()=>{
    setActiveBtn('')
  }
  return (
    <Wrapper key=''>
      <WrapperRow key=''>
        <WrapperCategories key=''>
          <WrapperCategory
            className={onlineInsure == 1 ? "active" : ""}
            onClick={handlePrivate}
            key=''
          >
            {t("common:For_individuals")}
          </WrapperCategory>
          <WrapperCategory
            className={onlineInsure == 2 ? "active" : ""}
            onClick={handlePublic}
            key=''
          >
            {t("common:home_card_title3_Legal_entities")}
          </WrapperCategory>
        </WrapperCategories>
        {id == "shop" ? (
          <WrapperTags key=''>
            <a key='' onClick={()=> setActiveBtn('active')}>
              <TagsTitle key='' className={activeBtn} onClick={() => sortData()}>
                {t("common:All_categories")}
              </TagsTitle>
            </a>
            <TagsRow key=''>
              {data?.map((item: any, idx: any) => (
                <a key='' onClick={removeAct}>
                  <Tag key={idx} onClick={() => sortData(item.id)}>
                  {item.name}
                </Tag>
                </a>
                
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
