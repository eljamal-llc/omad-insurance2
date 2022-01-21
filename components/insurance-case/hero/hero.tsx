import { FC } from "react";
import Image from "next/image";
import { HeroProps } from "./hero.t";
import { GWrapper } from "../../../styles/global-styles.e";
import { Title, Wrapper, BranDPos } from "./hero.e";
import { useRouter } from "next/router";
import BreadcrumbsBlock from "../../common/bread-crumbs/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useTranslation } from "next-i18next";
import { ContainerHero } from "../../yur-face-page/hero-bg/hero-bg.e";
const main_image = "/bg-avto-str.png";
const HeroCase: FC<HeroProps> = ({ idx }) => {
  const { t } = useTranslation();

  const router = useRouter();
  const id: any = Object.values(router.query);
  console.log("asdafadddddddlhsdsa" + id);
  function handleClick(event: any) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
    console.log("asdafadddddddlhsdsa" + "  " + id);
  }
  return (
    <ContainerHero imgUrl={main_image}>
      <BranDPos>
        <BreadcrumbsBlock
          url2={
            idx == "shop"
              ? "insurance-case"
              : idx == "case"
              ? "insurance-cases"
              : ""
          }
          url3={""}
          link1="Главная "
          link2={
            idx == "shop"
              ? "МАГАЗИН ПОЛИС "
              : idx == "case"
              ? "СТРАХОВОЙ СЛУЧАЙ"
              : ""
          }
          link3=""
        />
      </BranDPos>

      {idx == "shop" && <Title>{t("common:polit_market")}</Title>}
      {idx == "case" && <Title onClick={handleClick}>Страховой случай</Title>}
    </ContainerHero>
  );
};

export default HeroCase;
