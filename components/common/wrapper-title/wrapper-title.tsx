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
import { useRouter } from "next/router";
const WrapperTitle: FC<WrapperTitleProps> = ({
  title,
  onClass,
  data,
  sortData,
}) => {
  const { t } = useTranslation();
  const [showBtn, setShowBtb] = useState("show");
  const [activCat , setActivCat] = useState('')
  const [allAc , setAllAc] = useState('All')
  const router = useRouter()
  const{id} = router.query
  const activeHandler = (item: any)=>{

    setActivCat('active')
    setAllAc('')
  }
  const setActiveAll = ()=>{
      setAllAc('All')
    setActivCat('')

  }
  return (
    <Wrapper className={onClass}>
      <TitleRow>
        <WrapperCategories className="wrapper-categories">
          <SectionTitle color="white" title={title} />
        </WrapperCategories>
      {id !== '3' ? (
 <>
 {/* @ts-ignore */}
 {data?.length > 0 ? (
   <>
      <WrapperTags className="wrapper-tags">
        <div onClick={setActiveAll} >
          <TagsTitle className={allAc} onClick={() => sortData()}>
            {t("common:All_categories")}
          </TagsTitle>
        </div>
        
        <TagsRow>
          {data?.map((item, idx) => (
            
            //@ts-ignore
            <Tag onClick={()=>{setAllAc( item.name)}} id={idx} className={ item.name == allAc ? 'active' : item.name} key={idx}>
              <div onClick={() => sortData(item.id)}><p className={item.name} onClick={setActiveAll}>{item.name}</p></div>

              {/* <NextLink href="/" passHref>
                <Link>{item.name}</Link>
              </NextLink> */}
            </Tag>
          ))}
        </TagsRow>
      </WrapperTags>
      </>
      
    ) : (
      <></>
    )}
    </>
      ):('')}
       
      
      </TitleRow>
    </Wrapper>
  );
};

export default WrapperTitle;
