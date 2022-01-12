import { FC } from "react";
import Image from "next/image";
import { HeroProps } from "./hero.t";
import { GWrapper } from "../../../styles/global-styles.e";
import { Title, Wrapper ,BranDPos} from "./hero.e";

import BreadcrumbsBlock from "../../common/bread-crumbs/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useTranslation } from "next-i18next";
import { ContainerHero  } from "../../yur-face-page/hero-bg/hero-bg.e";
const main_image = "/bg-avto-str.png";
const HeroCase: FC<HeroProps> = ({ id }) => {
  const { t } = useTranslation();
  function handleClick(event: any) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  return (
    <ContainerHero imgUrl={main_image}>
      <BranDPos>
        <BreadcrumbsBlock url2={id == 'polit_market' ? 'insurance-case?id=polit_market' :'insurance-case?id=insurance-case' } url3={''} link1="Главная " link2={id == 'polit_market' ? "МАГАЗИН ПОЛИС " : 'СТРАХОВОЙ СЛУЧАЙ'} link3="" />
      </BranDPos>
      {id == "polit_market" ? ( 
        <Title>{t("common:polit_market")}</Title>
      ) : (
        <Title>Страховой случай</Title>
      )}
    </ContainerHero>
  );
};

export default HeroCase;
