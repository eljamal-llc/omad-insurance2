import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { HeroProps } from "./hero.t";
import { GWrapper } from "../../../styles/global-styles.e";
import { Title, Wrapper, BranDPos } from "./hero.e";
import { useRouter } from "next/router";
import BreadcrumbsBlock from "../../common/bread-crumbs/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useTranslation } from "next-i18next";
import { ContainerHero } from "../../yur-face-page/hero-bg/hero-bg.e";
import { api } from "../../../services/api";
import { ISliderData } from "../cards/cards.t";
const main_image = "/bg-avto-str.png";
const HeroCase: FC<HeroProps> = ({ idx }) => {
  const { t } = useTranslation();
  const [onlineInsure, setOnlineInsure] = useState(1);
  const [sliderData, setSliderData] = useState<ISliderData[] | []>([]);
  const router = useRouter();
  const id: any = Object.values(router.query);
  const [magaz , setMagaz] = useState()
  useEffect(() => {
   
    api
      .get("insurance-case/index", { params: { id: onlineInsure } })
      .then(async (response) => {
        await setSliderData(response.data);
      });
      api
      .get("insurance/find", { params: { id: onlineInsure } })
      .then((res) => {
        setMagaz(res.data);
      });
  
    
  }, [onlineInsure]);
  return (
    <ContainerHero imgUrl={main_image}>
      <BranDPos>
        <BreadcrumbsBlock
        // @ts-ignore
          breadcrumb={ idx == "case" ?  sliderData?.breadcrumb :  magaz?.breadcrumb_magazin }
        />
      </BranDPos>

      {idx == "shop" && <Title>{t("common:polit_market")}</Title>}
      {idx == "case" && <Title >Страховой случай</Title>}
    </ContainerHero>
  );
};

export default HeroCase;
