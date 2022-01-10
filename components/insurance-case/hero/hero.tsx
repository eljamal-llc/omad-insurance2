import { FC } from "react";
import Image from "next/image";
import { HeroProps } from "./hero.t";
import { GWrapper } from "../../../styles/global-styles.e";
import { Title, Wrapper } from "./hero.e";

import BreadcrumbsBlock from "../../common/bread-crumbs/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useTranslation } from "next-i18next";
import { ContainerHero } from "../../yur-face-page/hero-bg/hero-bg.e";
const main_image = "/bg-avto-str.png";
const HeroCase: FC<HeroProps> = ({ id }) => {
  const { t } = useTranslation();
  function handleClick(event: any) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  return (
    <ContainerHero imgUrl={main_image}>
      <BreadcrumbsBlock />
      {id == "10" ? (
        <Title>{t("common:polit_market")}</Title>
      ) : (
        <Title>Страховой случай</Title>
      )}
    </ContainerHero>
  );
};

export default HeroCase;
